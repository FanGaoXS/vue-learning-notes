<template>
  <div>
    <ul>
      <li>{{pageName}}1</li>
      <li>{{pageName}}2</li>
      <li>{{pageName}}3</li>
      <li>{{pageName}}4</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeNews",
    data() {
      return {
        pageName: '新闻'
      }
    },
  }
</script>

<style scoped>

</style>
