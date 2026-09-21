import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "cr" country flag (ISO 3166-1 alpha-2). */
const FlagCr = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#0000b4" d="M0 0h640v480H0z"/>
    <path fill="#fff" d="M0 75.4h640v322.3H0z"/>
    <path fill="#d90000" d="M0 157.7h640v157.7H0z"/>
  </g>` }
  )
}

export default FlagCr
