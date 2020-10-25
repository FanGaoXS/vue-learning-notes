<template>
  <div>
    <h2>你好！{{username}}</h2>
    <p>我是用户界面</p>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      // 需要动态获取username
      username() {
        let userId=this.$route.params.userId;
        console.log(userId);
        if (userId==10){
          return '张三';
        }else {
          return '李四';
        }
      }
    },
  }
</script>

<style scoped>

</style>
