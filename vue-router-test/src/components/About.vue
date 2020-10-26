<template>
  <div>
    <h2>我是{{pageName}}页面的标题</h2>
    <p>我是{{pageName}}页面的内容</p>
  </div>
</template>

<script>
  export default {
    name: "About",
    data() {
      return {
        pageName: '关于'
      }
    },
  }
</script>

<style scoped>

</style>
