import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "ml" country flag (ISO 3166-1 alpha-2). */
const FlagMl = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<g fill-rule="evenodd">
    <path fill="red" d="M425.8 0H640v480H425.7z"/>
    <path fill="#009a00" d="M0 0h212.9v480H0z"/>
    <path fill="#ff0" d="M212.9 0h214v480h-214z"/>
  </g>`)
  )
}

export default FlagMl
