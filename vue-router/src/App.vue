<template>
  <div id="app">
    <!--去首页的超链接-->
    <router-link to="/home">首页</router-link>
    <!--去关于的超链接-->
    <router-link to="/about">关于</router-link>
    <!--显示内容-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
