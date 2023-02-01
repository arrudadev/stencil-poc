<script lang="ts">
import { MyInput } from '@stencil-ui/vue'

export default {
  data() {
    return {
      name: 'VueJs'
    }
  },
  methods: {
    changeName (event: any) {
      const value = event.detail

      this.name = value
    }
  }
}
</script>

<template>
  <main class="app">
    <my-heading>Vue + Web components</my-heading>

    <my-text>Type your name:</my-text>

    <my-input placeholder='Type...' @changeInput="changeName" />

    <my-component :name="name" />
  </main>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #242424;

  min-height: 100vh;
  min-width: 100vw;
}

#my-component {
  margin-top: 10px;
}
</style>
