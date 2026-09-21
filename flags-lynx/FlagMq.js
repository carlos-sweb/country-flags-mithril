import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "mq" country flag (ISO 3166-1 alpha-2). */
const FlagMq = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#231f1e" d="M0 0h640v480H0z"/>
  <path fill="#00a650" d="M0 0h640v240H0z"/>
  <path fill="#ef1923" d="m0 0 320 240L0 480z"/>` }
  )
}

export default FlagMq
