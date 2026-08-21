import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "qa" country flag (ISO 3166-1 alpha-2). */
const FlagQa = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#8d1b3d" d="M0 0h640v480H0z"/>
  <path fill="#fff" d="M0 0v480h158.4l97.8-26.7-97.8-26.6 97.7-26.7-97.7-26.7 97.7-26.6-97.7-26.7 97.8-26.7-97.8-26.6 97.7-26.7-97.7-26.7 97.7-26.6-97.7-26.7 97.8-26.7-97.8-26.6L256.1 80l-97.7-26.7 97.8-26.6L158.3 0z"/>`)
  )
}

export default FlagQa
