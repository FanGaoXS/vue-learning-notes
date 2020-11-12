import Vue from 'vue'
import App from './App'
// 引入store
import store from "./store";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 注册store
  store,
  render: h => h(App)
})
