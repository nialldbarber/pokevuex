<template>
  <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
</template>

<script>
import { reactive, computed } from '@vue/composition-api'

export default {
  name: 'Button',
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    const increment = () => state.count++

    return {
      state,
      increment
    }
  }
}
</script>

<style>

</style>
