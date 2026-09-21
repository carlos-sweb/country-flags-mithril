import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "co" country flag (ISO 3166-1 alpha-2). */
const FlagCo = lynxIcon(`<g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#ffe800" d="M0 0h640v480H0z"/>
    <path fill="#00148e" d="M0 240h640v240H0z"/>
    <path fill="#da0010" d="M0 360h640v120H0z"/>
  </g>`, _attrs, 640, 480)

export default FlagCo
