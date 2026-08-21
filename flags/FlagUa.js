import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "ua" country flag (ISO 3166-1 alpha-2). */
const FlagUa = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<g fill-rule="evenodd" stroke-width="1pt">
    <path fill="gold" d="M0 0h640v480H0z"/>
    <path fill="#0057b8" d="M0 0h640v240H0z"/>
  </g>`)
  )
}

export default FlagUa
