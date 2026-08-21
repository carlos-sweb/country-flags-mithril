import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "ae" country flag (ISO 3166-1 alpha-2). */
const FlagAe = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#00732f" d="M0 0h640v160H0z"/>
  <path fill="#fff" d="M0 160h640v160H0z"/>
  <path fill="#000001" d="M0 320h640v160H0z"/>
  <path fill="red" d="M0 0h220v480H0z"/>`)
  )
}

export default FlagAe
