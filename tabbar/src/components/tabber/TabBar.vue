<template>
  <div class="tab-bar">

    <!--首页-->
    <tab-bar-item path="/home">
      <img src="../../assets/img/tabbar/home.svg" alt="首页" slot="item-icon">
      <img src="../../assets/img/tabbar/home_active.svg" alt="首页" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>

    <!--分类-->
    <tab-bar-item path="/category">
      <img src="../../assets/img/tabbar/category.svg" alt="分类" slot="item-icon">
      <img src="../../assets/img/tabbar/category_active.svg" alt="分类" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </tab-bar-item>

    <!--购物车-->
    <tab-bar-item path="/shopcart">
      <img src="../../assets/img/tabbar/shopcart.svg" alt="购物车" slot="item-icon">
      <img src="../../assets/img/tabbar/shopcart_active.svg" alt="购物车" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>

    <!--我的-->
    <tab-bar-item path="/profile">
      <img src="../../assets/img/tabbar/profile.svg" alt="我的" slot="item-icon">
      <img src="../../assets/img/tabbar/profile_active.svg" alt="我的" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>

  </div>
</template>

<script>
  // 导入TabBarItem
  import TabBarItem from "./TabBarItem";

  export default {
    name: "TabBar",
    components:{
      TabBarItem
    }
  }
</script>

<style scoped>

  .tab-bar{
    /* 依次从左往右顺序排列 */
    display: flex;
    /* 背景颜色 */
    background-color: #f6f6f6;
    /* 位置固定 */
    position: fixed;
    /* 位置固定到屏幕最下方 */
    left: 0;
    right: 0;
    bottom: 0;
  }

</style>
