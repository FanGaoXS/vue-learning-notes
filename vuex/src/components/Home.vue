<template>
  <div id="home">
    <h2>我是home页</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
    <h2>{{$store.getters.moreStudent}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      // 调用store的mutations里的increment方法
      increment() {
        this.$store.commit('increment')
      },
      decrement(){
        // 调用store的mutations里的decrement方法
        this.$store.commit('decrement');
      },
      incrementCount(count){
        this.$store.commit('incrementCount',count);
      }
    },
  }
</script>

<style scoped>
  #home {
    background-color: aliceblue;
    padding: 5px;
  }
</style>
