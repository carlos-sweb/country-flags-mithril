import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "pe" country flag (ISO 3166-1 alpha-2). */
const FlagPe = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#D91023" d="M0 0h640v480H0z"/>
  <path fill="#fff" d="M213.3 0h213.4v480H213.3z"/>` }
  )
}

export default FlagPe
