<template>
  <div id="profile">
    <h2>我是profile页</h2>
    <h2>{{$store.state.counter}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>
  #profile{
    background-color: aqua;
    padding: 5px;
  }
</style>
