import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "dk" country flag (ISO 3166-1 alpha-2). */
const FlagDk = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#c8102e" d="M0 0h640.1v480H0z"/>
  <path fill="#fff" d="M205.7 0h68.6v480h-68.6z"/>
  <path fill="#fff" d="M0 205.7h640.1v68.6H0z"/>` }
  )
}

export default FlagDk
