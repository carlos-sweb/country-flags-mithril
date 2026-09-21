import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "xx" country flag (ISO 3166-1 alpha-2). */
const FlagXx = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#fff" fill-rule="evenodd" stroke="#adb5bd" stroke-width="1.1" d="M.5.5h638.9v478.9H.5z"/>
  <path fill="none" stroke="#adb5bd" stroke-width="1.1" d="m.5.5 639 479m0-479-639 479"/>` }
  )
}

export default FlagXx
