import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "ch" country flag (ISO 3166-1 alpha-2). */
const FlagCh = lynxIcon(`<g fill-rule="evenodd" stroke-width="1pt">
    <path fill="red" d="M0 0h640v480H0z"/>
    <g fill="#fff">
      <path d="M170 195h300v90H170z"/>
      <path d="M275 90h90v300h-90z"/>
    </g>
  </g>`, _attrs, 640, 480)

export default FlagCh
