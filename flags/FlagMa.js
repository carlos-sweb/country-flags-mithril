import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "ma" country flag (ISO 3166-1 alpha-2). */
const FlagMa = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#c1272d" d="M640 0H0v480h640z"/>
  <path fill="none" stroke="#006233" stroke-width="11.7" d="M320 179.4 284.4 289l93.2-67.6H262.4l93.2 67.6z"/>`)
  )
}

export default FlagMa
