<script setup lang='ts'>
import { ref } from 'vue'
import { capitalizeWords, formatDate, formatTime } from '../../utils/various'

const count = ref(0)

const name = ref('')

const today = new Date()
</script>

<template>
  <div>
    <h1 class="italic">
      Italic: Test component
    </h1>
    <p>Today is: {{ formatDate(today) }}</p>
    <p>{{ formatTime(today, true) }}</p>
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
