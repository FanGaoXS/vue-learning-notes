<template>
  <div class="tab-bar">

    <slot></slot>

  </div>
</template>

<script>
  export default {
    name: "TabBar",
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
