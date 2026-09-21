# country-flags-mithril

Country flag SVGs as [Mithril.js](https://mithril.js.org/) components. Based on the same build approach as [lucide-mithril](https://github.com/carlos-sweb/lucide-mithril), using SVGs from the [flag-icons](https://github.com/lipis/flag-icons) package.

## Install

```bash
bun add country-flags-mithril
# or
npm install country-flags-mithril
```

## Usage

Each component corresponds to an ISO 3166-1 alpha-2 country code, prefixed with `Flag` and converted to PascalCase.

```js
import m from 'mithril'
import { FlagUs, FlagMx, FlagGbEng } from 'country-flags-mithril'

// Basic usage — renders an SVG flag at the default 640x480 size
m(FlagUs)

// Custom size
m(FlagMx, { width: 320, height: 240 })

// Any additional SVG attributes are passed through
m(FlagGbEng, { width: 100, height: 75, class: 'my-flag' })
```

### Component naming

| ISO code  | Component name |
|-----------|----------------|
| `us`      | `FlagUs`       |
| `mx`      | `FlagMx`       |
| `gb`      | `FlagGb`       |
| `gb-eng`  | `FlagGbEng`    |
| `gb-sct`  | `FlagGbSct`    |
| `es-ct`   | `FlagEsCt`     |

All 271 flags from flag-icons are available.

## mithril-lynx (Lynx)

[mithril-lynx](https://www.npmjs.com/package/mithril-lynx) does not support `m.trust`. On Lynx, SVG must follow the [native `<svg>` contract](https://lynxjs.org/api/elements/built-in/svg): `content` is a **full** `<svg>...</svg>` document string, and display size is set on the outer element via a `style` **object** (`{ width: "Npx", height: "Npx" }`), not CSS text strings.

Use the parallel `flags-lynx/` components (built with `lynxIcon` in `lynx_svg.js`):

```javascript
import m from 'mithril-runtime'
import FlagUs from 'country-flags-mithril/flags-lynx/FlagUs.js'
import FlagMx from 'country-flags-mithril/flags-lynx/FlagMx.js'

const MyComponent = {
  view: () => m('view', [
    m(FlagUs, { width: 320, height: 240 }),
    m(FlagMx, { width: 100, height: 75, class: 'my-flag' }),
  ]),
}
```

The web entry (`country-flags-mithril` / `flags/*`) is unchanged and still uses `m.trust`.

`mithril-runtime` is an optional peer dependency: install it when you use `flags-lynx/*`.

## Build

To regenerate the components from the latest version of flag-icons:

```bash
bun run build
```

This will:
1. Read all SVGs from `node_modules/flag-icons/flags/4x3/`
2. Generate one component file per flag under `flags/` (web, `m.trust`)
3. Generate the same components under `flags-lynx/` (mithril-lynx, full SVG in `content` + size via `style`)
4. Write the `index.js` entry point and `index.d.ts` TypeScript declarations

## Project structure

```
country-flags-mithril/
├── build/
│   └── build.js          # Build script
├── flags/                # Generated flag components (web, m.trust)
│   ├── FlagAd.js
│   ├── FlagUs.js
│   └── ...
├── flags-lynx/           # Generated flag components (mithril-lynx, full content + style)
│   ├── FlagAd.js
│   ├── FlagUs.js
│   └── ...
├── default_attrs.js      # Default SVG attributes (width, height, viewBox)
├── default_attrs.d.ts    # TypeScript types for default_attrs
├── lynx_svg.js           # Lynx SVG helper (full content + style size)
├── lynx_svg.d.ts
├── index.js              # Generated entry point (all exports)
└── index.d.ts            # Generated TypeScript declarations
```

## License

MIT — flag SVG data is sourced from [flag-icons](https://github.com/lipis/flag-icons) (MIT).
