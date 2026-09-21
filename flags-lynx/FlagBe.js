import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "be" country flag (ISO 3166-1 alpha-2). */
const FlagBe = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#000001" d="M0 0h213.3v480H0z"/>
    <path fill="#ffd90c" d="M213.3 0h213.4v480H213.3z"/>
    <path fill="#f31830" d="M426.7 0H640v480H426.7z"/>
  </g>` }
  )
}

export default FlagBe
