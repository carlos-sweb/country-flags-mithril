import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "ua" country flag (ISO 3166-1 alpha-2). */
const FlagUa = lynxIcon(`<g fill-rule="evenodd" stroke-width="1pt">
    <path fill="gold" d="M0 0h640v480H0z"/>
    <path fill="#0057b8" d="M0 0h640v240H0z"/>
  </g>`, _attrs, 640, 480)

export default FlagUa
