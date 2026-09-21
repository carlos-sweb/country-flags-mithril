import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "cz" country flag (ISO 3166-1 alpha-2). */
const FlagCz = lynxIcon(`<path fill="#fff" d="M0 0h640v240H0z"/>
  <path fill="#d7141a" d="M0 240h640v240H0z"/>
  <path fill="#11457e" d="M360 240 0 0v480z"/>`, _attrs, 640, 480)

export default FlagCz
