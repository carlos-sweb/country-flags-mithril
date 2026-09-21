import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "ga" country flag (ISO 3166-1 alpha-2). */
const FlagGa = lynxIcon(`<g fill-rule="evenodd">
    <path fill="#ffe700" d="M640 480H0V0h640z"/>
    <path fill="#36a100" d="M640 160H0V0h640z"/>
    <path fill="#006dbc" d="M640 480H0V320h640z"/>
  </g>`, _attrs, 640, 480)

export default FlagGa
