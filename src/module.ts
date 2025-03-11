import { defineNuxtModule, addPlugin, createResolver, addComponentsDir, addImportsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Enable or disable the module
   * @default true
   */
  enabled?: boolean

  /**
   * Prefix for auto-imported components
   * @default 'IO'
   */
  prefix?: string

}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'implemio',
    configKey: 'ioMod',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    enabled: true,
    prefix: 'IO',
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Skip if module is disabled
    if (options.enabled === false) {
      return
    }

    // Expose options to runtime
    nuxt.options.runtimeConfig.public.ioMod = {
      ...(nuxt.options.runtimeConfig.public.ioMod || {}),
    }

    // Auto-import composables
    addImportsDir(resolve('./runtime/composables'))

    // Auto-import utilities
    addImportsDir(resolve('./runtime/utils'))

    // Auto-import components with specified prefix
    addComponentsDir({
      path: resolve('runtime/components'),
      prefix: options.prefix || 'IO',
    })

    // Add plugin
    addPlugin(resolve('./runtime/plugin'))

    // Simple Tailwind hook - works with @nuxt/ui-pro's bundled Tailwind
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    nuxt.hook('tailwindcss:config' as any, (tailwindConfig) => {
    // Add our components to content scanning
      tailwindConfig.content = tailwindConfig.content || []
      tailwindConfig.content.push(resolve('./runtime/components/**/*.vue'))
    })
  },
})
