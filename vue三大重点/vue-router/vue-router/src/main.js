import Vue from 'vue'
import App from './App'
// 导入router
import router from "./router";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 启用router
  router,
  render: h => h(App)
})
