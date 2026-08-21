import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "am" country flag (ISO 3166-1 alpha-2). */
const FlagAm = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#d90012" d="M0 0h640v160H0z"/>
  <path fill="#0033a0" d="M0 160h640v160H0z"/>
  <path fill="#f2a800" d="M0 320h640v160H0z"/>`)
  )
}

export default FlagAm
