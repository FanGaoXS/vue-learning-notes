<template>
  <div id="app">
    <home/>
    <profile/>
    <module-a/>
  </div>
</template>

<script>
  import Home from "./components/Home";
  import Profile from "./components/Profile";
  import ModuleA from "./components/ModuleA";
  export default {
    name: 'App',
    components: {
      Home,
      Profile,
      ModuleA
    }
  }
</script>

<style>

</style>
