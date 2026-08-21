import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "pl" country flag (ISO 3166-1 alpha-2). */
const FlagPl = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<g fill-rule="evenodd">
    <path fill="#fff" d="M640 480H0V0h640z"/>
    <path fill="#dc143c" d="M640 480H0V240h640z"/>
  </g>`)
  )
}

export default FlagPl
