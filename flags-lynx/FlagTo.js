import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "to" country flag (ISO 3166-1 alpha-2). */
const FlagTo = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#c10000" d="M0 0h640v480H0z"/>
    <path fill="#fff" d="M0 0h250v200.3H0z"/>
    <g fill="#c10000">
      <path d="M102.8 31.2h39.9v139.6h-39.8z"/>
      <path d="M192.6 81v40H53V81z"/>
    </g>
  </g>` }
  )
}

export default FlagTo
