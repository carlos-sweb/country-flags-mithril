import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "gl" country flag (ISO 3166-1 alpha-2). */
const FlagGl = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#fff" d="M0 0h640v480H0z"/>
  <path fill="#d00c33" d="M0 240h640v240H0zm80 0a160 160 0 1 0 320 0 160 160 0 0 0-320 0"/>` }
  )
}

export default FlagGl
