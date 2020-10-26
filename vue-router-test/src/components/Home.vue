<template>
  <div>
    <h2>我是{{pageName}}的标题</h2>
    <p>我是{{pageName}}的内容</p>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        pageName: '主页'
      }
    },
  }
</script>

<style scoped>

</style>
