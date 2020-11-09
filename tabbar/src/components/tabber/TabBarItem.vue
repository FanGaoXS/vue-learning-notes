<template>
  <div class="tab-bar-item">

    <slot name="item-icon">导航栏图片</slot>

    <slot name="item-title">导航栏文字</slot>

    <!--<img src="../../assets/img/tabbar/home.svg" alt="">
    <div>首页</div>-->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem"
  }
</script>

<style scoped>
  .tab-bar-item{
    /* 依次从左往右顺序排列 */
    flex: 1;
    /* 文字居中 */
    text-align: center;
    /* 高度 */
    height: 49px;
    /* 文字大小 */
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
  /*.item-icon{
    width: 24px;
    height: 24px;
  }*/
</style>
