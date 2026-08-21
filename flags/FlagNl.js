import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "nl" country flag (ISO 3166-1 alpha-2). */
const FlagNl = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#ae1c28" d="M0 0h640v160H0z"/>
  <path fill="#fff" d="M0 160h640v160H0z"/>
  <path fill="#21468b" d="M0 320h640v160H0z"/>`)
  )
}

export default FlagNl
