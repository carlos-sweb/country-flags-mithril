import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "la" country flag (ISO 3166-1 alpha-2). */
const FlagLa = lynxIcon(`<defs>
    <clipPath id="la-a">
      <path fill-opacity=".7" d="M0 0h640v480H0z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#la-a)">
    <path fill="#ce1126" d="M-40 0h720v480H-40z"/>
    <path fill="#002868" d="M-40 119.3h720v241.4H-40z"/>
    <path fill="#fff" d="M423.4 240a103.4 103.4 0 1 1-206.8 0 103.4 103.4 0 1 1 206.8 0"/>
  </g>`, _attrs, 640, 480)

export default FlagLa
