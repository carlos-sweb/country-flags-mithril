import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "mm" country flag (ISO 3166-1 alpha-2). */
const FlagMm = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<path fill="#fecb00" d="M0 0h640v480H0z"/>
  <path fill="#34b233" d="M0 160h640v320H0z"/>
  <path fill="#ea2839" d="M0 320h640v160H0z"/>
  <g transform="translate(320 256.9)scale(176.87999)">
    <path id="mm-a" fill="#fff" d="m0-1 .3 1h-.6z"/>
    <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(-144)"/>
    <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(-72)"/>
    <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(72)"/>
    <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(144)"/>
  </g>`)
  )
}

export default FlagMm
