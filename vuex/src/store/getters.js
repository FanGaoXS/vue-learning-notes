// getters
const getters={
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
};
// 导出getters
export default getters;
