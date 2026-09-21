import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "gm" country flag (ISO 3166-1 alpha-2). */
const FlagGm = lynxIcon(`<defs>
    <clipPath id="gm-a">
      <path fill-opacity=".7" d="M0-48h640v480H0z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#gm-a)" transform="translate(0 48)">
    <path fill="red" d="M0-128h640V85.3H0z"/>
    <path fill="#fff" d="M0 85.3h640V121H0z"/>
    <path fill="#009" d="M0 120.9h640V263H0z"/>
    <path fill="#fff" d="M0 263.1h640v35.6H0z"/>
    <path fill="#090" d="M0 298.7h640V512H0z"/>
  </g>`, _attrs, 640, 480)

export default FlagGm
