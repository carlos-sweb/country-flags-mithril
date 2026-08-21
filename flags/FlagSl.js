import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "sl" country flag (ISO 3166-1 alpha-2). */
const FlagSl = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<g fill-rule="evenodd">
    <path fill="#0000cd" d="M0 320.3h640V480H0z"/>
    <path fill="#fff" d="M0 160.7h640v159.6H0z"/>
    <path fill="#00cd00" d="M0 0h640v160.7H0z"/>
  </g>`)
  )
}

export default FlagSl
