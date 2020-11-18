import Vue from 'vue'
import App from './App'

// 导入axios
import axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});

// 将request.js里的request函数导入
import {request1,request2} from "./network/request";

// 使用request函数
request1({
  url: '/川A.1234B'
}).then(function (res) {
  console.log(res);
}).catch(function (err) {
  console.log(err);
});

request2({
  url: '/2020-09-27'
}).then(function (res) {
  console.log(res);
}).catch(function (err) {
  console.log(err);
});


