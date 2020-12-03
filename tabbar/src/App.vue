<template>
  <div id="app">

    <!-- 显示内容 -->
    <router-view></router-view>

    <!-- 底下tabber -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

// 导入MainTabBar
import MainTabBar from "./components/content/MainTabBar";

export default {
  name: 'App',
  components:{
    MainTabBar
  }
}
</script>

<style>

</style>
