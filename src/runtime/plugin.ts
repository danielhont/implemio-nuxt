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
