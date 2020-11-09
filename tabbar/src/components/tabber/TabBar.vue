<template>
  <div id="tab-bar">

    <!--首页-->
    <TabBarItem>
      <img src="../../assets/img/tabbar/home.svg" alt="首页" slot="item-icon">
      <div slot="item-title">首页</div>
    </TabBarItem>

    <!--分类-->
    <TabBarItem>
      <img src="../../assets/img/tabbar/category.svg" alt="分类" slot="item-icon">
      <div slot="item-title">分类</div>
    </TabBarItem>

    <!--购物车-->
    <TabBarItem>
      <img src="../../assets/img/tabbar/shopcart.svg" alt="购物车" slot="item-icon">
      <div slot="item-title">购物车</div>
    </TabBarItem>

    <!--我的-->
    <TabBarItem>
      <img src="../../assets/img/tabbar/profile.svg" alt="我的" slot="item-icon">
      <div slot="item-title">我的</div>
    </TabBarItem>
  </div>
</template>

<script>

  import TabBarItem from "./TabBarItem";

  export default {
    name: "TabBar",
    components:{
      TabBarItem
    }
  }
</script>

<style scoped>
  #tab-bar{
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
