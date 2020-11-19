// 导入axios
import Axios from "axios";

// axios请求1
function request1(config){
  // 配置baseURL和timeout等配置信息
  let axiosInstance = Axios.create({
    baseURL: 'http://172.16.0.95:8880/v0/loc',
    timeout: 5000
  });

  // 利用interceptors.request.use()方法开启request请求拦截器
  axiosInstance.interceptors.request.use(
    function (config) {
      // request请求发起前进行的操作（一般是对config进行操作）
      console.log(config);
      console.log('interceptors.request-->onFulfilled');
      // 因为requset1这个函数是链式编程，所以一定要将config返回出去
      return config;
    },function (err) {
      console.log(err);
    }
  );

  // 将axios实例直接返回（因为它本身就是个promise）
  return axiosInstance(config);
}

// axios请求2
function request2(config){
  // 配置baseURL和timeout等配置信息
  let axiosInstance = Axios.create({
    baseURL: 'http://172.16.0.95:8880/v0/loc/川A.1234B',
    timeout: 10000
  });

  // 利用利用interceptors.response.use()方法开启response响应拦截器
  axiosInstance.interceptors.response.use(
    function (res) {
      // 一般从服务器里返回的数据由于axios的封装会返回status和headers头
      // 我们可以利用response拦截器过滤掉它们
      console.log(res);
      console.log('interceptors.response-->onFulfilled');
      // 因为我们不需要其他的响应头，所以我们可以只返回res里的data
      return res.data;
    },
    function (err) {
      console.log(err);
    }
  );


  // 将axios实例直接返回（因为它本身就是个promise）
  return axiosInstance(config);
}

// 导出request函数
export {
  request1,
  request2
};

