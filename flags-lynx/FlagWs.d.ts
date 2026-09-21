import type { Vnode } from 'mithril'

declare const FlagWs: { view: (vnode: Vnode<{ width?: number; height?: number; [key: string]: any }>) => any }
export default FlagWs
