import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "mg" country flag (ISO 3166-1 alpha-2). */
const FlagMg = lynxIcon(`<g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#fc3d32" d="M213.3 0H640v240H213.3z"/>
    <path fill="#007e3a" d="M213.3 240H640v240H213.3z"/>
    <path fill="#fff" d="M0 0h213.3v480H0z"/>
  </g>`, _attrs, 640, 480)

export default FlagMg
