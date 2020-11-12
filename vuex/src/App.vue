<template>
  <div id="app">
    <home/>
    <profile/>
  </div>
</template>

<script>
  import Home from "./components/Home";
  import Profile from "./components/Profile";
  export default {
    name: 'App',
    components: {
      Home,
      Profile
    }
  }
</script>

<style>

</style>
