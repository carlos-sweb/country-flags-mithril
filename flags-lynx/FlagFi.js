import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "fi" country flag (ISO 3166-1 alpha-2). */
const FlagFi = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#fff" d="M0 0h640v480H0z"/>
  <path fill="#002f6c" d="M0 174.5h640v131H0z"/>
  <path fill="#002f6c" d="M175.5 0h130.9v480h-131z"/>` }
  )
}

export default FlagFi
