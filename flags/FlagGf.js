import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "gf" country flag (ISO 3166-1 alpha-2). */
const FlagGf = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#fff" d="M0 0h640v480H0z"/>
  <path fill="#000091" d="M0 0h213.3v480H0z"/>
  <path fill="#e1000f" d="M426.7 0H640v480H426.7z"/>`)
  )
}

export default FlagGf
