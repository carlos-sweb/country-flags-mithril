import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "bg" country flag (ISO 3166-1 alpha-2). */
const FlagBg = lynxIcon(`<path fill="#fff" d="M0 0h640v160H0z"/>
  <path fill="#00966e" d="M0 160h640v160H0z"/>
  <path fill="#d62612" d="M0 320h640v160H0z"/>`, _attrs, 640, 480)

export default FlagBg
