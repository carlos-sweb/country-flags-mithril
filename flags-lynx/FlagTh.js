import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "th" country flag (ISO 3166-1 alpha-2). */
const FlagTh = lynxIcon(`<g fill-rule="evenodd">
    <path fill="#f4f5f8" d="M0 0h640v480H0z"/>
    <path fill="#2d2a4a" d="M0 162.5h640v160H0z"/>
    <path fill="#a51931" d="M0 0h640v82.5H0zm0 400h640v80H0z"/>
  </g>`, _attrs, 640, 480)

export default FlagTh
