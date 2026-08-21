import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "ax" country flag (ISO 3166-1 alpha-2). */
const FlagAx = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.width, vnode.attrs?.height), ...(vnode.attrs || {}) },
    m.trust(`<defs>
    <clipPath id="ax-a">
      <path fill-opacity=".7" d="M106.3 0h1133.3v850H106.3z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#ax-a)" transform="matrix(.56472 0 0 .56482 -60 -.1)">
    <path fill="#0053a5" d="M0 0h1300v850H0z"/>
    <g fill="#ffce00">
      <path d="M400 0h250v850H400z"/>
      <path d="M0 300h1300v250H0z"/>
    </g>
    <g fill="#d21034">
      <path d="M475 0h100v850H475z"/>
      <path d="M0 375h1300v100H0z"/>
    </g>
  </g>`)
  )
}

export default FlagAx
