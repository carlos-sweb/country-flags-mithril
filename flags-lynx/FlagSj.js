import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the "sj" country flag (ISO 3166-1 alpha-2). */
const FlagSj = lynxIcon(`<path fill="#ef2b2d" d="M0 0h640v480H0z"/>
  <path fill="#fff" d="M180 0h120v480H180z"/>
  <path fill="#fff" d="M0 180h640v120H0z"/>
  <path fill="#002868" d="M210 0h60v480h-60z"/>
  <path fill="#002868" d="M0 210h640v60H0z"/>`, _attrs, 640, 480)

export default FlagSj
