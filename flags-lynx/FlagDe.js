import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "de" country flag (ISO 3166-1 alpha-2). */
const FlagDe = lynxIcon(`<path fill="#fc0" d="M0 320h640v160H0z"/>
  <path fill="#000001" d="M0 0h640v160H0z"/>
  <path fill="red" d="M0 160h640v160H0z"/>`, _attrs, 640, 480)

export default FlagDe
