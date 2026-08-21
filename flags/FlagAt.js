import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "at" country flag (ISO 3166-1 alpha-2). */
const FlagAt = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#fff" d="M0 160h640v160H0z"/>
  <path fill="#c8102e" d="M0 0h640v160H0zm0 320h640v160H0z"/>`)
  )
}

export default FlagAt
