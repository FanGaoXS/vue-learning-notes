// actions
const actions={
  // 异步修改学生信息
  actionUpdateStudentInfo(context,payload){
    console.log('actions的payload->',payload);
    console.log('actions的payload的type->',payload.type);
    console.log('actions的payload的params->',payload.student);
    // 利用setTimeout（延时1秒）模拟异步
    setTimeout(function () {
      // 调用mutations里的操作
      context.commit({
        type: 'updateStudentInfo',
        student: payload.student
      });
      // 异步成功后的回调函数
      payload.success();
    },1000);
  }
};
// 导出actions
export default actions;
