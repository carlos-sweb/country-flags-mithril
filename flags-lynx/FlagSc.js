import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "sc" country flag (ISO 3166-1 alpha-2). */
const FlagSc = lynxIcon(`<path fill="#fff" d="M0 0h640v480H0Z"/>
  <path fill="#d92223" d="M0 480V0h640v160z"/>
  <path fill="#fcd955" d="M0 480V0h426.7z"/>
  <path fill="#003d88" d="M0 480V0h213.3z"/>
  <path fill="#007a39" d="m0 480 640-160v160z"/>`, _attrs, 640, 480)

export default FlagSc
