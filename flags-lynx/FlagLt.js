import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "lt" country flag (ISO 3166-1 alpha-2). */
const FlagLt = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<g fill-rule="evenodd" stroke-width="1pt" transform="scale(.64143 .96773)">
    <rect width="1063" height="708.7" fill="#006a44" rx="0" ry="0" transform="scale(.93865 .69686)"/>
    <rect width="1063" height="236.2" y="475.6" fill="#c1272d" rx="0" ry="0" transform="scale(.93865 .69686)"/>
    <path fill="#fdb913" d="M0 0h997.8v164.6H0z"/>
  </g>` }
  )
}

export default FlagLt
