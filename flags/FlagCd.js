import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "cd" country flag (ISO 3166-1 alpha-2). */
const FlagCd = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#007fff" d="M0 0h640v480H0z"/>
  <path fill="#f7d618" d="M28.8 96H96l20.8-67.2L137.6 96h67.2l-54.4 41.6 20.8 67.2-54.4-41.6-54.4 41.6 20.8-67.2zM600 0 0 360v120h40l600-360V0z"/>
  <path fill="#ce1021" d="M640 0 0 384v96L640 96z"/>`)
  )
}

export default FlagCd
