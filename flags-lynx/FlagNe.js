import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "ne" country flag (ISO 3166-1 alpha-2). */
const FlagNe = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#0db02b" d="M0 0h640v480H0z"/>
  <path fill="#fff" d="M0 0h640v320H0z"/>
  <path fill="#e05206" d="M0 0h640v160H0z"/>
  <circle cx="320" cy="240" r="68" fill="#e05206"/>` }
  )
}

export default FlagNe
