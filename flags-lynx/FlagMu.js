import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "mu" country flag (ISO 3166-1 alpha-2). */
const FlagMu = lynxIcon(`<g fill-rule="evenodd">
    <path fill="#00a04d" d="M0 360h640v120H0z"/>
    <path fill="#151f6d" d="M0 120h640v120H0z"/>
    <path fill="#ee2737" d="M0 0h640v120H0z"/>
    <path fill="#ffcd00" d="M0 240h640v120H0z"/>
  </g>`, _attrs, 640, 480)

export default FlagMu
