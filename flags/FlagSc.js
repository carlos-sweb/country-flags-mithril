import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "sc" country flag (ISO 3166-1 alpha-2). */
const FlagSc = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#fff" d="M0 0h640v480H0Z"/>
  <path fill="#d92223" d="M0 480V0h640v160z"/>
  <path fill="#fcd955" d="M0 480V0h426.7z"/>
  <path fill="#003d88" d="M0 480V0h213.3z"/>
  <path fill="#007a39" d="m0 480 640-160v160z"/>`)
  )
}

export default FlagSc
