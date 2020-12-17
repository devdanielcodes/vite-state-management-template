<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>Click the counter</p>
    <button @click="increament">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  </div>
</template>

<script>
import state from "../state"//Importing the state file
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  setup() {
    //Destructuring the exported data and method created from the state file
    const { count, increament } = state


    //Returning destructured elements to make them reactive in the whole component 
    return { count, increament }
  }
}
</script>
