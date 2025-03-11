

# Implemio Module for Nuxt!

# Usage
## Install the module
pnpm add implemio

## Add the module to nuxt.config.js
export default defineNuxtConfig({
  modules: ['implemio'],
  ioMod: {
    // options
  }
})


# Extending

# Build the module
pnpm run prepack

# Publish (using the release script)
pnpm run release

# Or manually
pnpm version patch  # or minor/major
pnpm publish

[![pnpm version][pnpm-version-src]][pnpm-version-href]
[![pnpm downloads][pnpm-downloads-src]][pnpm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

My new Nuxt module for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/implemio?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Foo
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add implemio
```

That's it! You can now use My Module in your Nuxt app ✨


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  pnpm install
  
  # Generate type stubs
  pnpm run dev:prepare
  
  # Develop with the playground
  pnpm run dev
  
  # Build the playground
  pnpm run dev:build
  
  # Run ESLint
  pnpm run lint
  
  # Run Vitest
  pnpm run test
  pnpm run test:watch
  
  # Release new version
  pnpm run release
  ```

</details>


<!-- Badges -->
[pnpm-version-src]: https://img.shields.io/pnpm/v/implemio/latest.svg?style=flat&colorA=020420&colorB=00DC82
[pnpm-version-href]: https://pnpmjs.com/package/implemio

[pnpm-downloads-src]: https://img.shields.io/pnpm/dm/implemio.svg?style=flat&colorA=020420&colorB=00DC82
[pnpm-downloads-href]: https://pnpm.chart.dev/implemio

[license-src]: https://img.shields.io/pnpm/l/implemio.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://pnpmjs.com/package/implemio

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
