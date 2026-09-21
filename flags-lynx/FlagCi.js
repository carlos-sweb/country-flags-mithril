import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "ci" country flag (ISO 3166-1 alpha-2). */
const FlagCi = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<g fill-rule="evenodd">
    <path fill="#00cd00" d="M426.8 0H640v480H426.8z"/>
    <path fill="#ff9a00" d="M0 0h212.9v480H0z"/>
    <path fill="#fff" d="M212.9 0h214v480h-214z"/>
  </g>` }
  )
}

export default FlagCi
