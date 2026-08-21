import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "bh" country flag (ISO 3166-1 alpha-2). */
const FlagBh = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#fff" d="M0 0h640v480H0"/>
  <path fill="#ce1126" d="M640 0H96l110.7 48L96 96l110.7 48L96 192l110.7 48L96 288l110.7 48L96 384l110.7 48L96 480h544"/>`)
  )
}

export default FlagBh
