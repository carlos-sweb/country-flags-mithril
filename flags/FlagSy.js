import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "sy" country flag (ISO 3166-1 alpha-2). */
const FlagSy = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path d="M0 0h640v480H0Z"/>
  <path fill="#fff" d="M0 0h640v320H0Z"/>
  <path fill="#007a3d" d="M0 0h640v160H0Z"/>
  <path fill="#ce1126" d="m101 300 39-120 39 120-102-74.2h126M461 300l39-120 39 120-102-74.2h126M281 300l39-120 39 120-102.1-74.2h126.2"/>`)
  )
}

export default FlagSy
