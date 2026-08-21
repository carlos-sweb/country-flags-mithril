import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "td" country flag (ISO 3166-1 alpha-2). */
const FlagTd = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<g fill-rule="evenodd">
    <path fill="#002664" d="M0 0h214v480H0z"/>
    <path fill="#c60c30" d="M426 0h214v480H426z"/>
    <path fill="#fecb00" d="M214 0h212v480H214z"/>
  </g>`)
  )
}

export default FlagTd
