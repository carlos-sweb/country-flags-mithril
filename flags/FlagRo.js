import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "ro" country flag (ISO 3166-1 alpha-2). */
const FlagRo = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#00319c" d="M0 0h213.3v480H0z"/>
    <path fill="#ffde00" d="M213.3 0h213.4v480H213.3z"/>
    <path fill="#de2110" d="M426.7 0H640v480H426.7z"/>
  </g>`)
  )
}

export default FlagRo
