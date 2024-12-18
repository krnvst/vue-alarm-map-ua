<template>
  <MainLayout />
</template>

<script>
import MainLayout from './components/MainLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background-color: rgb(110, 133, 237);
; /* Green */
  border: none;
  color: white;
  padding: 5px 20px;
  margin: 3px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
