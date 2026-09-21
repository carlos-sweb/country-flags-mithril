import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "mv" country flag (ISO 3166-1 alpha-2). */
const FlagMv = lynxIcon(`<path fill="#d21034" d="M0 0h640v480H0z"/>
  <path fill="#007e3a" d="M120 120h400v240H120z"/>
  <circle cx="350" cy="240" r="80" fill="#fff"/>
  <circle cx="380" cy="240" r="80" fill="#007e3a"/>`, _attrs, 640, 480)

export default FlagMv
