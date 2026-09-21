import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "gb-sct" country flag (ISO 3166-1 alpha-2). */
const FlagGbSct = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#0065bd" d="M0 0h640v480H0z"/>
  <path stroke="#fff" stroke-width=".6" d="m0 0 5 3M0 3l5-3" transform="scale(128 160)"/>` }
  )
}

export default FlagGbSct
