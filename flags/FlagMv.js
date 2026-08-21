import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "mv" country flag (ISO 3166-1 alpha-2). */
const FlagMv = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#d21034" d="M0 0h640v480H0z"/>
  <path fill="#007e3a" d="M120 120h400v240H120z"/>
  <circle cx="350" cy="240" r="80" fill="#fff"/>
  <circle cx="380" cy="240" r="80" fill="#007e3a"/>`)
  )
}

export default FlagMv
