<script setup lang='ts'>
import { ref } from 'vue'
import { IOCapitalize, IOFormatDate } from '../../utils/various'
import { useIOCounter } from '../../composables/testComposable'

const count = useIOCounter()
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
    <p>Now is: {{ IOFormatDate(now, { includeSeconds: true, mode: 'time' }) }}</p>
    <input
      v-model="name"
      placeholder="Enter your name"
    >
    <p>Your name is: {{ IOCapitalize(name) }}</p>
    <p>Count is {{ count.count }}</p>
    <UButton @click="count.increment">
      Increment
    </UButton>
    <UButton @click="count.decrement">
      Increment
    </UButton>
  </div>
</template>
