<script setup lang="ts">
import { MyComponent, MyHeading, MyText, MyInput } from "@stencil-ui/vue"
</script>

<template>
  <main class="app">
    <MyHeading>Vue + Web components</MyHeading>

    <MyText>Type your name:</MyText>

    <MyInput placeholder='Type...'  />

    <MyComponent />
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
