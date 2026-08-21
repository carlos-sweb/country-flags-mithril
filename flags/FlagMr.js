import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "mr" country flag (ISO 3166-1 alpha-2). */
const FlagMr = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#cd2a3e" d="M0 0h640v480H0z"/>
  <path fill="#006233" d="M0 72h640v336H0z"/>
  <path fill="#ffc400" d="M470 154.6a150 150 0 0 1-300 0 155 155 0 0 0-5 39.2 155 155 0 1 0 310 0 154 154 0 0 0-5-39.2" class="mr-st1"/>
  <path fill="#ffc400" d="m320 93.8-13.5 41.5H263l35.3 25.6-13.5 41.4 35.3-25.6 35.3 25.6-13.5-41.4 35.3-25.6h-43.6z"/>`)
  )
}

export default FlagMr
