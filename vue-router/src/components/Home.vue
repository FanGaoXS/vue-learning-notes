<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{content}}</p>

    <router-link to="/home/news">查看新闻</router-link>
    <router-link to="/home/message">查看消息</router-link>
    <router-view/>

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
    // 生命周期函数：在组件被创建后调用
    created() {
      console.log('home created');
    },
    // 生命周期函数：在组件销毁后被调用
    destroyed() {
      console.log('home destroyed');
    }
  }
</script>

<style scoped>

</style>
