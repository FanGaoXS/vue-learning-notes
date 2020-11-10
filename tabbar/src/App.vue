<template>
  <div id="app">

    <!-- 显示内容 -->
    <router-view></router-view>

    <!-- 底下导航栏 -->
    <tab-bar></tab-bar>

  </div>
</template>

<script>

// 导入TabBar
import TabBar from "./components/tabber/TabBar";

export default {
  name: 'App',
  components:{
    TabBar
  }
}
</script>

<style>

</style>
