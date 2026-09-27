import { test, expect, mock } from 'bun:test'

// mithril-runtime is an optional peer dep; stub `m` so the vnode can be inspected.
mock.module('mithril-runtime', () => ({ default: (tag, attrs) => ({ tag, attrs }) }))

const { default: Icon } = await import('../flags-lynx/FlagAd.js')

const render = (attrs) => Icon.view({ attrs }).attrs

test('size + ontap: event on outer element, size in content', () => {
  const ontap = () => {}
  const out = render({ size: 32, ontap })
  expect(out.ontap).toBe(ontap)
  expect(out.content).toStartWith('<svg ')
  expect(out.content).not.toContain('ontap')
  expect(out.style).toEqual({ width: '32px', height: '24px' })
})

test('other events and outer-only attrs stay out of content', () => {
  const fn = () => {}
  const out = render({ bindtap: fn, catchtap: fn, 'global-bindtap': fn, id: 'icon', 'data-x': '1' })
  for (const k of ['bindtap', 'catchtap', 'global-bindtap', 'id', 'data-x']) {
    expect(out[k]).toBeDefined()
    expect(out.content.slice(0, out.content.indexOf('>'))).not.toContain(` ${k}=`)
  }
})
