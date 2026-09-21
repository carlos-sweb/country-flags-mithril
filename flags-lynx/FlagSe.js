import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the "se" country flag (ISO 3166-1 alpha-2). */
const FlagSe = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}), content: `<path fill="#005293" d="M0 0h640v480H0z"/>
  <path fill="#fecb00" d="M176 0v192H0v96h176v192h96V288h368v-96H272V0z"/>` }
  )
}

export default FlagSe
