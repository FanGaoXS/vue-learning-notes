import * as info from './js/info';

console.log(info.age);
console.log(info.name);

import Vue from 'vue';

let app = new Vue({
  el:'#app',
  data:{
    message:'Hello,webpack and vue!',
  }
});