import { ref } from 'vue'

/**
 * Provides a simple counter.
 * @returns Reactive count and increment/decrement methods
 */
export function useIOCounter() {
  const count = ref(0)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  return {
    count,
    increment,
    decrement,
  }
}
