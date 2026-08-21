import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "mg" country flag (ISO 3166-1 alpha-2). */
const FlagMg = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#fc3d32" d="M213.3 0H640v240H213.3z"/>
    <path fill="#007e3a" d="M213.3 240H640v240H213.3z"/>
    <path fill="#fff" d="M0 0h213.3v480H0z"/>
  </g>`)
  )
}

export default FlagMg
