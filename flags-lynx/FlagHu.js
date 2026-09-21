import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "hu" country flag (ISO 3166-1 alpha-2). */
const FlagHu = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<g fill-rule="evenodd">
    <path fill="#fff" d="M640 480H0V0h640z"/>
    <path fill="#388d00" d="M640 480H0V320h640z"/>
    <path fill="#d43516" d="M640 160.1H0V.1h640z"/>
  </g>` }
  )
}

export default FlagHu
