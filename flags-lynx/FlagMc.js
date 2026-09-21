import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "mc" country flag (ISO 3166-1 alpha-2). */
const FlagMc = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#f31830" d="M0 0h640v240H0z"/>
    <path fill="#fff" d="M0 240h640v240H0z"/>
  </g>` }
  )
}

export default FlagMc
