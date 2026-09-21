import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "cz" country flag (ISO 3166-1 alpha-2). */
const FlagCz = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#fff" d="M0 0h640v240H0z"/>
  <path fill="#d7141a" d="M0 240h640v240H0z"/>
  <path fill="#11457e" d="M360 240 0 0v480z"/>` }
  )
}

export default FlagCz
