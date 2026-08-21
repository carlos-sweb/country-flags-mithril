import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "vc" country flag (ISO 3166-1 alpha-2). */
const FlagVc = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<g fill-rule="evenodd">
    <path fill="#f4f100" d="M0 0h640v480H0z"/>
    <path fill="#199a00" d="M490 0h150v480H490z"/>
    <path fill="#0058aa" d="M0 0h150v480H0z"/>
    <path fill="#199a00" d="m259.3 130-46.4 71.3 44.7 74.4 43.8-73.7zm121.2 0-46.3 71.3 44.7 74.4 43.8-73.7zm-61.2 97.3-46.4 71.4 44.8 74.4 43.8-73.7-42.2-72z"/>
  </g>`)
  )
}

export default FlagVc
