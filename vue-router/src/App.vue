<template>
  <div id="app">

    <!--去首页的超链接-->
    <router-link to="/home" tag="button">主页</router-link>
    <!--去关于的超链接-->
    <router-link to="/about" tag="button">关于</router-link>

    <router-link :to="'/user/'+userId" tag="button">用户</router-link>

    <!--利用query传递对象参数-->
    <router-link :to="{ path: '/profile', query: { name: '张三', age:18 } }" tag="button">我的</router-link>

    <!--显示内容-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 11
    }
  },
}
</script>

<style>
  .active{
    color: red;
  }
</style>
