import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "bw" country flag (ISO 3166-1 alpha-2). */
const FlagBw = lynxIcon(`<g fill-rule="evenodd">
    <path fill="#00cbff" d="M0 0h640v480H0z"/>
    <path fill="#fff" d="M0 160h640v160H0z"/>
    <path fill="#000001" d="M0 186h640v108H0z"/>
  </g>`, _attrs, 640, 480)

export default FlagBw
