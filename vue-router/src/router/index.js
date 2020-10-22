// 1、引入vue-router和vue
import VueRouter from 'vue-router';
import Vue from 'vue';

// 2、用vue.use()全局使用vue-router插件
Vue.use(VueRouter);

// 3、创建vue-router对象（和创建Vue实例类似）
const router = new VueRouter({
  //配置路由和页面的映射关系
  routes:[

  ]
});

// 4、导出（暴露）给外部，使得Vue能够使用它
export default router;
