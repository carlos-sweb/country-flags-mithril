import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "ye" country flag (ISO 3166-1 alpha-2). */
const FlagYe = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#fff" d="M0 0h640v472.8H0z"/>
    <path fill="#f10600" d="M0 0h640v157.4H0z"/>
    <path fill="#000001" d="M0 322.6h640V480H0z"/>
  </g>`)
  )
}

export default FlagYe
