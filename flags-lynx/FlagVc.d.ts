import type { Vnode } from 'mithril'

declare const FlagVc: { view: (vnode: Vnode<{ width?: number; height?: number; [key: string]: any }>) => any }
export default FlagVc
