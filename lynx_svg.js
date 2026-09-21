import m from 'mithril-runtime'

function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

export function mergeStyle(w, h, style) {
  const base = { width: `${w}px`, height: `${h}px` }
  if (!style || typeof style === 'string') return base
  return { ...base, ...style }
}

/**
 * Lynx SVG component helper.
 * `content` must be a full `<svg>...</svg>` string; outer size is a style object in px.
 *
 * @param {string} inner SVG children markup (no outer <svg>)
 * @param {(width:number, height:number)=>object} defaultsFn e.g. _attrs
 * @param {number} defaultWidth
 * @param {number} defaultHeight
 */
export function lynxIcon(inner, defaultsFn, defaultWidth = 640, defaultHeight = 480) {
  return {
    view(vnode) {
      const attrs = vnode.attrs || {}
      const { size, width, height, style, class: cls, className, content: _drop, ...rest } = attrs
      const outer = {}
      const svgProps = {}
      for (const [k, v] of Object.entries(rest)) {
        if (k.startsWith('on') || k.startsWith('bind')) outer[k] = v
        else svgProps[k] = v
      }
      const w = Number(width ?? size ?? defaultWidth)
      const h = Number(
        height ?? (size != null ? Math.round(Number(size) * defaultHeight / defaultWidth) : defaultHeight)
      )
      const merged = { xmlns: 'http://www.w3.org/2000/svg', ...defaultsFn(w, h), ...svgProps }
      delete merged.size
      delete merged.style
      delete merged.content
      let open = '<svg'
      for (const [k, v] of Object.entries(merged)) {
        if (v == null) continue
        open += ` ${k}="${escapeAttr(v)}"`
      }
      open += '>'
      if (cls != null || className != null) outer.class = cls ?? className
      outer.style = mergeStyle(w, h, style)
      outer.content = open + inner + '</svg>'
      return m('svg', outer)
    }
  }
}
