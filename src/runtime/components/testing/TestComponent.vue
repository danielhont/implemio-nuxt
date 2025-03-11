<script setup lang='ts'>
import { ref } from 'vue'
import { capitalizeWords, formatDate, formatTime } from '../../utils/various'

const count = ref(0)

const name = ref('')

const now = ref(new Date())

const setNow = () => {
  now.value = new Date()
}
</script>

<template>
  <div>
    <h2>
      <span class="italic">Italic: Test component</span>
    </h2>
    <UButton
      label="Update now()"
      @click="setNow"
    />
    <p>Now is: {{ formatDate(now) }}</p>
    <p>{{ formatTime(now, true) }}</p>
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
