import type { Vnode } from 'mithril'

declare const FlagVu: { view: (vnode: Vnode<{ width?: number; height?: number; [key: string]: any }>) => any }
export default FlagVu
