import Vue from 'vue'
import App from './App'
// 从router/index.js里导入路由组件
import Router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 将vue-router注册到vue中
  router:Router,
  render: h => h(App),
})

