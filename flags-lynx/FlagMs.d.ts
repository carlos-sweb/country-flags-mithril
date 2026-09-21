import type { Vnode } from 'mithril'

declare const FlagMs: { view: (vnode: Vnode<{ width?: number; height?: number; [key: string]: any }>) => any }
export default FlagMs
