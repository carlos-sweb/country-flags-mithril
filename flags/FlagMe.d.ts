import type { Vnode } from 'mithril'

declare const FlagMe: { view: (vnode: Vnode<{ width?: number; height?: number; [key: string]: any }>) => any }
export default FlagMe
