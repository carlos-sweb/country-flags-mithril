import type { Vnode } from 'mithril'

declare const FlagHn: { view: (vnode: Vnode<{ width?: number; height?: number; [key: string]: any }>) => any }
export default FlagHn
