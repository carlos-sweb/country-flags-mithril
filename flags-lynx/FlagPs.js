import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "ps" country flag (ISO 3166-1 alpha-2). */
const FlagPs = lynxIcon(`<path fill="#009639" d="M0 0h640v480H0z"/>
  <path fill="#fff" d="M0 0h640v320H0z"/>
  <path d="M0 0h640v160H0z"/>
  <path fill="#ed2e38" d="m0 0 320 240L0 480Z"/>`, _attrs, 640, 480)

export default FlagPs
