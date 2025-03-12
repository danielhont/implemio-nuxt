// This is not in use (uncomment addPlugin in module.ts to use it)
// I can use plugins in nuxt to inject runtime code, for example to expose a global object to the application, or to add global methods or properties to the Vue instance.

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  console.log('Plugin injected by implemio!')

  // Return an object to expose to your application
  return {
    provide: {
      ioMod: {
        version: '1.0.0',
      },
    },
  }
})
