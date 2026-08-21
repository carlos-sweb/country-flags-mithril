import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "mu" country flag (ISO 3166-1 alpha-2). */
const FlagMu = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<g fill-rule="evenodd">
    <path fill="#00a04d" d="M0 360h640v120H0z"/>
    <path fill="#151f6d" d="M0 120h640v120H0z"/>
    <path fill="#ee2737" d="M0 0h640v120H0z"/>
    <path fill="#ffcd00" d="M0 240h640v120H0z"/>
  </g>`)
  )
}

export default FlagMu
