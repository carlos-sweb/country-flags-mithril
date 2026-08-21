import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "tn" country flag (ISO 3166-1 alpha-2). */
const FlagTn = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#e70013" d="M0 0h640v480H0z"/>
  <path fill="#fff" d="M320 119.2a1 1 0 0 0-1 240.3 1 1 0 0 0 1-240.3M392 293a90 90 0 1 1 0-107 72 72 0 1 0 0 107m-4.7-21.7-37.4-12.1-23.1 31.8v-39.3l-37.4-12.2 37.4-12.2V188l23.1 31.8 37.4-12.1-23.1 31.8z"/>`)
  )
}

export default FlagTn
