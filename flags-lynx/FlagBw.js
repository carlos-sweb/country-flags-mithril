import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "bw" country flag (ISO 3166-1 alpha-2). */
const FlagBw = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<g fill-rule="evenodd">
    <path fill="#00cbff" d="M0 0h640v480H0z"/>
    <path fill="#fff" d="M0 160h640v160H0z"/>
    <path fill="#000001" d="M0 186h640v108H0z"/>
  </g>` }
  )
}

export default FlagBw
