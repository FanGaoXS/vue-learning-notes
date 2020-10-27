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
    name: "HomeMessage",
    data() {
      return {
        pageName: '消息'
      }
    },
  }
</script>

<style scoped>

</style>
