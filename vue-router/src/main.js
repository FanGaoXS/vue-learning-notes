import Vue from 'vue'
import App from './App'
// 从router/index.js里导入路由组件
import Router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  Router,
  render: h => h(App)
})
