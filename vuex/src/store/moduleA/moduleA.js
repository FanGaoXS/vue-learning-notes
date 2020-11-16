// moduleA
const moduleA={
  state: {
    name: '我是moduleA的name'
  },
  getters: {
    aName(state){
      return state.name+'moduleA的getters';
    },
    bName(state,getters,rootState){
      return getters.aName+rootState.counter;
    }
  },
  mutations: {
    updateName(state){
      state.name='我是修改后的moduleA的name';
    }
  },
  actions: {
    asyncUpdateName(context,payload){
      setTimeout(function () {
        context.commit({
          type: 'updateName',
        });
        payload.success();
      },1000);
    }
  }
};
// 将moduleA导出
export default moduleA;
