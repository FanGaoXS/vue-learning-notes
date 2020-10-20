<template>
  <div>
    <h2>{{message}}</h2>
    <button class="btn" @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        message: 'Hello,Vue!',
      }
    },
    methods: {
      btnClick() {
        alert(this.message);
      }
    },
  }
</script>

<style scoped>
  .btn{
    color: red;
  }
</style>