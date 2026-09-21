import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "ss" country flag (ISO 3166-1 alpha-2). */
const FlagSs = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#078930" d="M0 336h640v144H0z"/>
  <path fill="#fff" d="M0 144h640v192H0z"/>
  <path fill="#000001" d="M0 0h640v144H0z"/>
  <path fill="#da121a" d="M0 168h640v144H0z"/>
  <path fill="#0f47af" d="m0 0 415.7 240L0 480z"/>
  <path fill="#fcdd09" d="M200.7 194.8 61.7 240l139 45.1L114.9 167v146z"/>` }
  )
}

export default FlagSs
