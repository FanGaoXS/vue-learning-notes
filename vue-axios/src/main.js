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

// 基本使用
/*axios({
  // 请求的url
  url: 'https://car.blctek.com:8443/v0/loc/川A.1234B',
  // 请求的方式（默认是GET）
  method: 'GET',
  // 请求的参数
  params: {

  }
}).then(function (res) {
  /!*成功后的回调函数*!/
  console.log(res);
}).catch(function (res) {
  /!*失败后的回调函数*!/
});*/

/*// 利用axios.defaults来配置相关默认配置（全局配置）
axios.defaults.baseURL='https://car.blctek.com:8443';

// 并发请求
axios.all([

  axios({
    url: '/v0/loc/川A.1234B',
    method: 'GET',
    params: {

    }
  }),

  axios({
    url: '/v0/loc/川A.1234B/2020-09-28',
    method: 'GET',
    params: {

    }
  })

]).then(function (results) {
  console.log(results[0]);
  console.log(results[1]);
});*/





axios.all([

  axios({
    baseURL: 'https://car.blctek.com:8443',
    url: '/v0/loc/川A.1234B',
    method: 'GET',
    params: {

    }
  }),

  axios({
    baseURL: 'https://car.blctek.com:8443',
    url: '/v0/loc/川A.1234B/2020-09-28',
    method: 'GET',
    params: {

    }
  }),

]).then(function (results) {
  console.log(results[0]);
  console.log(results[1]);
});



