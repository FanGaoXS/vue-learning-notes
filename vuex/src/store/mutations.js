// mutations
import Vue from "vue";

const mutations={
  // 对counter+1
  increment(state){
    state.counter++;
  },
  // 对counter-1
  decrement(state){
    state.counter--;
  },
  incrementCount(state,payload){
    console.log(payload);
    console.log(payload.type);
    console.log(payload.count);
    console.log(payload.test);
    state.counter+=payload.count;
  },
  insertStudent(state,payload){
    console.log('payload->',payload);
    console.log('type->',payload.type);
    console.log('student->',payload.student);
    state.studentList.push(payload.student);
  },
  deleteStudent(state,payload){
    console.log('payload->',payload);
    console.log('type->',payload.type);
    state.studentList.pop();
  },
  insertStudentInfo(state,payload){
    console.log('payload->',payload);
    console.log('type->',payload.type);
    console.log('sex->',payload.sex);
    let sex=payload.sex;
    let studentList=state.studentList;
    for (let i = 0; i < studentList.length; i++) {
      Vue.set(studentList[i],'sex',sex);
    }
  },
  deleteStudentInfo(state,payload){
    console.log('payload->',payload);
    console.log('type->',payload.type);
    let studentList=state.studentList;
    for (let i = 0; i < studentList.length; i++) {
      Vue.delete(studentList[i],'age');
    }
  },
  // 同步修改学生信息
  updateStudentInfo(state,payload){
    console.log('mutations的payload->',payload);
    console.log('mutations的payload的type->',payload.type);
    console.log('mutations的payload的params->',payload.student);
    state.student=payload.student;
  }
};
// 导出mutations
export default mutations;
