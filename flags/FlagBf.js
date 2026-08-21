import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "bf" country flag (ISO 3166-1 alpha-2). */
const FlagBf = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<g fill-rule="evenodd">
    <path fill="#de0000" d="M640 479.6H.4V0H640z"/>
    <path fill="#35a100" d="M639.6 480H0V240.2h639.6z"/>
    <path fill="#fff300" d="m254.6 276.2-106-72.4h131L320 86.6 360.4 204l131-.1-106 72.4 40.5 117.3-106-72.6L214 393.4"/>
  </g>`)
  )
}

export default FlagBf
