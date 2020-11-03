<template>
  <div>
    <h2>我是profile组件</h2>
    <p>{{name}}</p>
    <p>{{age}}</p>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    data() {
      return {
        name: this.$route.query.name,
        age: this.$route.query.age,
      }
    },
  }
</script>

<style scoped>

</style>
