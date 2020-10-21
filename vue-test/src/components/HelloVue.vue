<template>
  <div>
    <ul>
      <li v-for="(item,index) in movies">{{index}}-{{item.name}}</li>
    </ul>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "HelloVue",
    data() {
      return {
        movies: [
          { id: 0, name:'钢铁侠1'},
          { id: 1, name:'钢铁侠2'},
          { id: 2, name:'钢铁侠3'},
          { id: 3, name:'复仇者联盟'}
        ],
        name:'test'
      }
    },
    methods: {
      btnClick() {
        console.log(this.name);
      }
    },
  }
</script>

<style scoped>

</style>
