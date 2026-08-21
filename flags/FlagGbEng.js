import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "gb-eng" country flag (ISO 3166-1 alpha-2). */
const FlagGbEng = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#fff" d="M0 0h640v480H0z"/>
  <path fill="#ce1124" d="M281.6 0h76.8v480h-76.8z"/>
  <path fill="#ce1124" d="M0 201.6h640v76.8H0z"/>`)
  )
}

export default FlagGbEng
