import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "bq" country flag (ISO 3166-1 alpha-2). */
const FlagBq = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#21468b" d="M0 0h640v480H0z"/>
  <path fill="#fff" d="M0 0h640v320H0z"/>
  <path fill="#ae1c28" d="M0 0h640v160H0z"/>` }
  )
}

export default FlagBq
