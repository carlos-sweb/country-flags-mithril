export function mergeStyle(
  w: number,
  h: number,
  style?: Record<string, unknown> | string | null
): { width: string; height: string; [key: string]: unknown }

export function lynxIcon(
  inner: string,
  defaultsFn: (width: number, height: number) => Record<string, unknown>,
  defaultWidth?: number,
  defaultHeight?: number
): { view: (vnode: { attrs?: Record<string, unknown> }) => unknown }
