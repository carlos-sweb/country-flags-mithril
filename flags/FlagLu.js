import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "lu" country flag (ISO 3166-1 alpha-2). */
const FlagLu = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#ed2939" d="M0 0h640v160H0z"/>
  <path fill="#fff" d="M0 160h640v160H0z"/>
  <path fill="#00a1de" d="M0 320h640v160H0z"/>`)
  )
}

export default FlagLu
