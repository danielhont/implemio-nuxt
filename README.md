# @implemio/nuxt

Implemio Module for Nuxt - A collection of components, composables, and utilities for Nuxt 3/4 projects.

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

## Features

- 🧩 Auto-imported Vue components
- 🛠️ Auto-imported composables
- 🔧 Auto-imported utility functions
- 🎨 Customizable with module options
- 📚 Full TypeScript support

## Installation

Add the module to your Nuxt project:

```bash
# Using pnpm
pnpm add @implemio/nuxt

# Using npm
npm install @implemio/nuxt

# Using yarn
yarn add @implemio/nuxt
```

## Setup

Add the module to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['@implemio/nuxt'],
  
  // Optional module configuration
  ioMod: {
    // Options...
    }
})
```

## Usage

### Components

All components are auto-imported with the configured prefix (default: `IO`):

```vue
<template>
  <IOProse>
    <h1>Styled content</h1>
    <p>This content will have nice typography</p>
  </IOProse>
</template>
```

### Composables

Access module composables anywhere in your app:

```vue
<script setup>
// Auto-imported
const { theme, toggleTheme } = useIOStyles()
</script>

<template>
  <div :class="themeClass">
    <button @click="toggleTheme">Toggle Theme</button>
  </div>
</template>
```

### Utilities

Use utility functions throughout your app:

```vue
<script setup>
// Auto-imported
const title = capitalize('welcome to implemio')
const description = truncate('This is a very long description that will be cut off...', 20)
</script>
```

## Configuration

Configure the module in your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['@implemio/nuxt'],
  ioMod: {
    // Enable or disable the module
    enabled: true,
    
    // Prefix for auto-imported components
    prefix: 'IO',
    
    // Theme configuration ('light' or 'dark')
    theme: 'light'
  }
})
```

---

## Development Guide

For maintaining and enhancing this module:

### Project Structure

```
io-mod/
├── src/
│   ├── module.ts               # Module entry point
│   └── runtime/                # Runtime code
│       ├── components/         # Vue components
│       ├── composables/        # Vue composables
│       ├── utils/              # Utility functions
│       └── plugin.ts           # Runtime plugin
├── playground/                 # Test Nuxt app
└── test/                       # Tests
```

### Adding New Features

#### Adding Components

1. Create a Vue component in components:

```vue
<template>
  <div class="io-new-component">
    <slot />
  </div>
</template>

<script setup>
// Component logic here
</script>
```

2. It will be auto-imported with the configured prefix (e.g., `IONewComponent`)

#### Adding Composables

Add files to composables:

```typescript
export function useNewFeature() {
  // Composable logic here
  return {
    // Return values
  }
}
```

#### Adding Utilities

Add files to utils:

```typescript
export function newUtil(input: string): string {
  // Utility logic here
  return result
}
```

### Development Workflow

```bash
# Install dependencies
pnpm install

# Generate type stubs and prepare dev environment
pnpm run dev:prepare

# Start development server with playground
pnpm run dev

# Run tests
pnpm run test
```

### Publishing Updates

1. Make your changes
2. Update tests if needed
3. Run tests: `pnpm run test`
4. Update version:
   - `pnpm version patch` (bug fixes)
   - `pnpm version minor` (new features)
   - `pnpm version major` (breaking changes)
5. Publish: `pnpm run release`

---

## Contributing

See the Contributing Guide for development instructions.

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@implemio/nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@implemio/nuxt
[npm-downloads-src]: https://img.shields.io/npm/dm/@implemio/nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/@implemio/nuxt
[license-src]: https://img.shields.io/npm/l/@implemio/nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@implemio/nuxt
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com

Similar code found with 1 license type
