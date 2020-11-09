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
    // 生命周期函数：组件被创建后执行
    created() {
      console.log('Profile created');
    },
    destroyed() {
      console.log('Profile destroyed');
    }
  }
</script>

<style scoped>

</style>
