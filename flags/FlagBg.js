import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "bg" country flag (ISO 3166-1 alpha-2). */
const FlagBg = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#fff" d="M0 0h640v160H0z"/>
  <path fill="#00966e" d="M0 160h640v160H0z"/>
  <path fill="#d62612" d="M0 320h640v160H0z"/>`)
  )
}

export default FlagBg
