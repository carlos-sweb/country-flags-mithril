import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "dz" country flag (ISO 3166-1 alpha-2). */
const FlagDz = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#fff" d="M320 0h320v480H320z"/>
  <path fill="#006233" d="M0 0h320v480H0z"/>
  <path fill="#d21034" d="M424 180a120 120 0 1 0 0 120 96 96 0 1 1 0-120m4 60-108-35.2 67.2 92V183.2l-67.2 92z"/>`)
  )
}

export default FlagDz
