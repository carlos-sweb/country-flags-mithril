import { readdir, readFile } from 'fs/promises'
import { join, basename } from 'path'
import { existsSync, mkdirSync } from 'fs'

const FLAGS_DIR = join(import.meta.dir, '../node_modules/flag-icons/flags/4x3')
const OUT_DIR   = join(import.meta.dir, '../flags')

// Ensure output directory exists
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })

/**
 * Convert an ISO 3166-1 alpha-2 code (e.g. "us", "gb-eng") to a PascalCase
 * component name suitable as a JS identifier.
 *
 * Examples:
 *   us       → FlagUs
 *   gb-eng   → FlagGbEng
 *   arab     → FlagArab
 */
function toComponentName(code) {
  const parts = code.split(/[-_]/)
  const pascal = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('')
  return `Flag${pascal}`
}

/**
 * Extract the inner content of an <svg> tag (everything between <svg ...> and </svg>).
 */
function extractSvgInner(svgContent) {
  // Remove the outer <svg ...> wrapper tag, keeping only the children
  const inner = svgContent
    .replace(/^[\s\S]*?<svg[^>]*>/i, '')   // remove opening <svg ...>
    .replace(/<\/svg>\s*$/i, '')            // remove closing </svg>
    .trim()
  return inner
}

// Read all SVG files
const files = (await readdir(FLAGS_DIR))
  .filter(f => f.endsWith('.svg'))
  .sort()

const exportLines = []
const generatedNames = []

for (const file of files) {
  const code = basename(file, '.svg')           // e.g. "us"
  const componentName = toComponentName(code)   // e.g. "FlagUs"

  const svgRaw = await readFile(join(FLAGS_DIR, file), 'utf8')
  const svgInner = extractSvgInner(svgRaw)

  // Escape backticks and template literal syntax inside the SVG string
  const svgSafe = svgInner.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')

  const componentCode = `import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "${code}" country flag (ISO 3166-1 alpha-2). */
const ${componentName} = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(\`${svgSafe}\`)
  )
}

export default ${componentName}
`

  await Bun.write(join(OUT_DIR, `${componentName}.js`), componentCode)

  exportLines.push(`export { default as ${componentName} } from './flags/${componentName}.js'`)
  generatedNames.push({ code, componentName })
}

// Generate index.js
const indexContent = exportLines.join('\n') + '\n'
await Bun.write(join(import.meta.dir, '../index.js'), indexContent)

// Generate index.d.ts (TypeScript declarations)
const dtsImports = generatedNames.map(({ componentName }) =>
  `import type { ClassComponent, Vnode } from 'mithril'`
).slice(0, 1).join('\n')  // single import line is enough

const dtsExports = generatedNames.map(({ componentName }) =>
  `export declare const ${componentName}: { view: (vnode: Vnode<{ width?: number; height?: number; [key: string]: any }>) => any }`
).join('\n')

const dtsContent = `import type { Vnode } from 'mithril'

${dtsExports}
`
await Bun.write(join(import.meta.dir, '../index.d.ts'), dtsContent)

console.log(`✓ Generated ${generatedNames.length} flag components in flags/`)
console.log(`✓ Written index.js and index.d.ts`)
console.log('\nFlags generated:')
for (const { code, componentName } of generatedNames) {
  console.log(`  ${code.padEnd(10)} → ${componentName}`)
}
