// 1、导入vue、vuex
import Vue from "vue";
import Vuex from "vuex";

// 2、使用vue.use()方法全局使用vuex插件
Vue.use(Vuex);

// 3、使用Vuex.store方法创建store对象
let store =new Vuex.Store({
  state: {
    counter: 0,
    message: 'Hello world!'
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {}
});


// 4、将store对象导出
export default store;
