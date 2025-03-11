<script setup lang='ts'>
import { ref } from 'vue'
import { capitalizeWords } from '../utils/various'

const count = ref(0)

const name = ref('')
</script>

<template>
  <div>
    <h1>Test component</h1>
    <input
      v-model="name"
      placeholder="Enter your name"
    >
    <p>Your name is: {{ capitalizeWords(name) }}</p>
    <p>Count is {{ count }}</p>
    <button @click="count++">
      Increment
    </button>
  </div>
</template>
