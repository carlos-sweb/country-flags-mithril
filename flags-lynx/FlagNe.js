import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "ne" country flag (ISO 3166-1 alpha-2). */
const FlagNe = lynxIcon(`<path fill="#0db02b" d="M0 0h640v480H0z"/>
  <path fill="#fff" d="M0 0h640v320H0z"/>
  <path fill="#e05206" d="M0 0h640v160H0z"/>
  <circle cx="320" cy="240" r="68" fill="#e05206"/>`, _attrs, 640, 480)

export default FlagNe
