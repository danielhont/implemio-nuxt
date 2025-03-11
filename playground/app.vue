<template>
  <div>
    Nuxt module playground!
    <Prose>
      <h1>Hello from implemio!</h1>
      <p>This is inside a Prose component!</p>
    </Prose>
    <TestComponent />
  </div>
</template>

<script setup>
import Prose from '../src/runtime/components/Prose.vue'
import TestComponent from '../src/runtime/components/testing/TestComponent.vue'
</script>
