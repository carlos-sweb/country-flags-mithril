import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "sr" country flag (ISO 3166-1 alpha-2). */
const FlagSr = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#377e3f" d="M.1 0h640v480H.1z"/>
  <path fill="#fff" d="M.1 96h640v288H.1z"/>
  <path fill="#b40a2d" d="M.1 144h640v192H.1z"/>
  <path fill="#ecc81d" d="m320 153.2 56.4 173.6-147.7-107.3h182.6L263.6 326.8z"/>` }
  )
}

export default FlagSr
