import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "lc" country flag (ISO 3166-1 alpha-2). */
const FlagLc = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<g fill-rule="evenodd">
    <path fill="#65cfff" d="M0 0h640v480H0z"/>
    <path fill="#fff" d="m318.9 42 162.7 395.3-322.6.9z"/>
    <path fill="#000001" d="m319 96.5 140.8 340-279 .8z"/>
    <path fill="#ffce00" d="m318.9 240.1 162.7 197.6-322.6.5z"/>
  </g>`)
  )
}

export default FlagLc
