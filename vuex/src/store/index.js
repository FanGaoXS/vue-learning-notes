// 导入vue
import Vue from "vue";
// 导入vuex
import Vuex from "vuex";

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
    ]
  },
  // 对state进行操作的事件
  mutations: {
    // 对counter+1
    increment(state){
      state.counter++;
    },
    // 对counter-1
    decrement(state){
      state.counter--;
    },
    incrementCount(state,count){
      state.counter+=count;
    }
  },
  actions: {},
  getters: {
    // 年龄大于20岁的学生
    moreStudent(state){
      let studentList = state.studentList;
      let returnStudentList=[];
      for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].age>=20){
          returnStudentList.push(studentList[i]);
        }
      }
      return returnStudentList;
    }
  },
  modules: {}
});

// 导出store对象
export default store;
