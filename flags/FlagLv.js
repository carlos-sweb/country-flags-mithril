import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "lv" country flag (ISO 3166-1 alpha-2). */
const FlagLv = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<g fill-rule="evenodd">
    <path fill="#fff" d="M0 0h640v480H0z"/>
    <path fill="#981e32" d="M0 0h640v192H0zm0 288h640v192H0z"/>
  </g>`)
  )
}

export default FlagLv
