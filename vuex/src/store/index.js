// 导入vue（利用Vue.use()使用vuex插件）
import Vue from "vue";
// 导入vuex（vuex插件本体）
import Vuex from "vuex";

// 导入store的actions、mutations、getters
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

// 导入store的moduleA和moduleB
import moduleA from "./moduleA/moduleA";
import moduleB from "./moduleB/moduleB";

// 利用Vue的use方法使用Vuex插件
Vue.use(Vuex);

// 利用Vuex.Store类创建store对象
const store=new Vuex.Store({
  // 存放状态信息
  state: {
    counter: 0,
    studentList: [
      { name: '张三', age: 18},
      { name: '李四', age: 22},
      { name: '王麻子', age: 24},
      { name: 'wqk', age: 30},
    ],
    student: {
      name: 'wqk',
      age: 20,
    }
  },
  actions,
  mutations,
  getters,
  modules: {
    moduleA,
    moduleB
  }
});

// 导出store对象
export default store;
