import type { Vnode } from 'mithril'

declare const FlagRe: { view: (vnode: Vnode<{ width?: number; height?: number; [key: string]: any }>) => any }
export default FlagRe
