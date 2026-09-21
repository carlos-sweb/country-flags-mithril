import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "id" country flag (ISO 3166-1 alpha-2). */
const FlagId = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#e70011" d="M0 0h640v240H0Z"/>
  <path fill="#fff" d="M0 240h640v240H0Z"/>` }
  )
}

export default FlagId
