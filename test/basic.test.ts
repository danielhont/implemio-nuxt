import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders the index page', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')
    expect(html).toContain('<div>basic</div>')
  })

  it('auto-imports components with the correct prefix', async () => {
    const html = await $fetch('/components')
    expect(html).toContain('IOProse')
    expect(html).not.toContain('undefined')
  })

  it('provides composables that work correctly', async () => {
    const html = await $fetch('/composables')
    expect(html).toContain('theme-toggle-works')
  })

  it('makes utility functions available', async () => {
    const html = await $fetch('/utils')
    expect(html).toContain('Welcome To Implemio') // Capitalized
    expect(html).toContain('This is a very lo...') // Truncated
  })

  it('respects module configuration options', async () => {
    const html = await $fetch('/config')
    expect(html).toContain('prefix-works')
  })
})
