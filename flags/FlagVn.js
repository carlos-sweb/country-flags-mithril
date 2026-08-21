import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "vn" country flag (ISO 3166-1 alpha-2). */
const FlagVn = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<defs>
    <clipPath id="vn-a">
      <path fill-opacity=".7" d="M-85.3 0h682.6v512H-85.3z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#vn-a)" transform="translate(80)scale(.9375)">
    <path fill="#da251d" d="M-128 0h768v512h-768z"/>
    <path fill="#ff0" d="M349.6 381 260 314.3l-89 67.3L204 272l-89-67.7 110.1-1 34.2-109.4L294 203l110.1.1-88.5 68.4 33.9 109.6z"/>
  </g>`)
  )
}

export default FlagVn
