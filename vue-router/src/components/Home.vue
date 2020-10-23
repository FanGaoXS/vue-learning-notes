<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{content}}</p>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        name: '主页',
      }
    },
    computed: {
      title() {
        return '我是'+this.name+'的标题';
      },
      content() {
        return '我是'+this.name+'的内容';
      }
    },
  }
</script>

<style scoped>

</style>
