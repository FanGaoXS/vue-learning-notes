<template>
  <div id="moduleA">
    <h2>我是moduleA页</h2>
    <h2>{{$store.state.moduleA.name}}</h2>
    <h2>{{$store.getters.aName}}</h2>
    <h2>{{$store.getters.bName}}</h2>
    <button @click="updateName">修改名字</button>
    <button @click="asyncUpdateName">异步修改名字</button>
  </div>
</template>

<script>
  export default {
    name: "ModuleA",
    methods: {
      updateName() {
        this.$store.commit({
          type: 'updateName'
        });
      },
      asyncUpdateName(){
        this.$store.dispatch({
          type: 'asyncUpdateName',
          success:function () {
            alert('异步修改名字成功');
          }
        })
      }
    },
  }
</script>

<style scoped>
  #moduleA{
    background-color: #42b983;
    padding: 5px;
  }
</style>
