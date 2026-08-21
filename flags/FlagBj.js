import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "bj" country flag (ISO 3166-1 alpha-2). */
const FlagBj = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<defs>
    <clipPath id="bj-a">
      <path fill="gray" d="M67.6-154h666v666h-666z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#bj-a)" transform="matrix(.961 0 0 .7207 -65 111)">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#319400" d="M0-154h333v666H0z"/>
      <path fill="#ffd600" d="M333-154h666v333H333z"/>
      <path fill="#de2110" d="M333 179h666v333H333z"/>
    </g>
  </g>`)
  )
}

export default FlagBj
