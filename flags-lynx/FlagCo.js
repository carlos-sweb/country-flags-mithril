import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "co" country flag (ISO 3166-1 alpha-2). */
const FlagCo = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#ffe800" d="M0 0h640v480H0z"/>
    <path fill="#00148e" d="M0 240h640v240H0z"/>
    <path fill="#da0010" d="M0 360h640v120H0z"/>
  </g>` }
  )
}

export default FlagCo
