import type { Vnode } from 'mithril'

declare const FlagIs: { view: (vnode: Vnode<{ width?: number; height?: number; [key: string]: any }>) => any }
export default FlagIs
