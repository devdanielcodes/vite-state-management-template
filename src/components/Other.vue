<template>
  <div>
      <h1>Other Component</h1>
      <div @click="increament">
          {{count}}
      </div>
  </div>
</template>

<script>
 import state from "../state"
export default {
  setup() {
    const { count, increament } = state

    return{ count, increament }
  }

}
</script>

<style scoped>

</style>