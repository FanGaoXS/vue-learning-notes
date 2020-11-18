// 导入axios
import Axios from "axios";

// axios请求1
function request1(config){
  // 配置baseURL和timeout等配置信息
  let axiosInstance = Axios.create({
    baseURL: 'http://172.16.0.95:8880/v0/loc',
    timeout: 5000
  });
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
  // 将axios实例直接返回（因为它本身就是个promise）
  return axiosInstance(config);
}

// 导出request函数
export {
  request1,
  request2
};

