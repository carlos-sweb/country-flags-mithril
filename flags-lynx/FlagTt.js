import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "tt" country flag (ISO 3166-1 alpha-2). */
const FlagTt = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#fff" d="M0 0h640v480H0z"/>
  <path fill="#e00000" fill-rule="evenodd" d="M463.7 480 0 1v478.8zM176.3 0 640 479V.2z"/>
  <path fill="#000001" fill-rule="evenodd" d="M27.7.2h118.6l468.2 479.3H492.2z"/>` }
  )
}

export default FlagTt
