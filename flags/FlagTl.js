import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "tl" country flag (ISO 3166-1 alpha-2). */
const FlagTl = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<defs>
    <clipPath id="tl-a">
      <path fill-opacity=".7" d="M0 0h682.7v512H0z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#tl-a)" transform="scale(.9375)">
    <path fill="#cb000f" d="M0 0h1031.2v512H0z"/>
    <path fill="#f8c00c" d="M0 0c3.2 0 512 256.7 512 256.7L0 512z"/>
    <path fill="#000001" d="M0 0c2.1 0 340.6 256.7 340.6 256.7L0 512z"/>
    <path fill="#fff" d="M187.7 298.2 127 284.7l-31 52.8-5-59.7-60.7-13.3 54.9-24.9-3.3-59.3 40.2 43.4 55.4-25.3-28.9 54 39.2 45.8z"/>
  </g>`)
  )
}

export default FlagTl
