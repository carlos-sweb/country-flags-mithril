import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "cg" country flag (ISO 3166-1 alpha-2). */
const FlagCg = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<defs>
    <clipPath id="cg-a">
      <path fill-opacity=".7" d="M-79.5 32h640v480h-640z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#cg-a)" transform="translate(79.5 -32)">
    <path fill="#ff0" d="M-119.5 32h720v480h-720z"/>
    <path fill="#00ca00" d="M-119.5 32v480l480-480z"/>
    <path fill="red" d="M120.5 512h480V32z"/>
  </g>` }
  )
}

export default FlagCg
