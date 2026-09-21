import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "ee" country flag (ISO 3166-1 alpha-2). */
const FlagEe = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#1791ff" d="M0 0h640v160H0z"/>
  <path fill="#000001" d="M0 160h640v160H0z"/>
  <path fill="#fff" d="M0 320h640v160H0z"/>` }
  )
}

export default FlagEe
