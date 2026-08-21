import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "es-ct" country flag (ISO 3166-1 alpha-2). */
const FlagEsCt = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#fcdd09" d="M0 0h640v480H0z"/>
  <path stroke="#da121a" stroke-width="60" d="M0 90h810m0 120H0m0 120h810m0 120H0" transform="scale(.79012 .88889)"/>`)
  )
}

export default FlagEsCt
