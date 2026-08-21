import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "bd" country flag (ISO 3166-1 alpha-2). */
const FlagBd = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#006a4e" d="M0 0h640v480H0z"/>
  <circle cx="280" cy="240" r="160" fill="#f42a41"/>`)
  )
}

export default FlagBd
