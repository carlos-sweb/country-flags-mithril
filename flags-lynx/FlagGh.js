import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "gh" country flag (ISO 3166-1 alpha-2). */
const FlagGh = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#006b3f" d="M0 0h640v480H0z"/>
  <path fill="#fcd116" d="M0 0h640v320H0z"/>
  <path fill="#ce1126" d="M0 0h640v160H0z"/>
  <path fill="#000001" d="m320 160 52 160-136.1-98.9H404L268 320z"/>` }
  )
}

export default FlagGh
