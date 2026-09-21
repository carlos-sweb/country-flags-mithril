import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "gn" country flag (ISO 3166-1 alpha-2). */
const FlagGn = lynxIcon(`<g fill-rule="evenodd" stroke-width="1pt">
    <path fill="red" d="M0 0h213.3v480H0z"/>
    <path fill="#ff0" d="M213.3 0h213.4v480H213.3z"/>
    <path fill="#090" d="M426.7 0H640v480H426.7z"/>
  </g>`, _attrs, 640, 480)

export default FlagGn
