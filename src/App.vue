<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite + Composition API State Management" />
    <Other  />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Other from './components/Other.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Other
  }
}
</script>
