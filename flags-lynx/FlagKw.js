import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "kw" country flag (ISO 3166-1 alpha-2). */
const FlagKw = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<defs>
    <clipPath id="kw-a">
      <path fill-opacity=".7" d="M0 0h682.7v512H0z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#kw-a)" transform="scale(.9375)">
    <path fill="#fff" d="M0 170.6h1024v170.7H0z"/>
    <path fill="#f31830" d="M0 341.3h1024V512H0z"/>
    <path fill="#00d941" d="M0 0h1024v170.7H0z"/>
    <path fill="#000001" d="M0 0v512l255.4-170.7.6-170.8z"/>
  </g>` }
  )
}

export default FlagKw
