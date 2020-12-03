// 1、导入vue和vue-router
import Vue from "vue";
import VueRouter from "vue-router";

// 导入组件（懒加载）
const Home = () => import('../components/Home');
const Category = () => import('../components/Category');
const About = () => import('../components/About');

// 2、利用vue的use()全局使用vue-router插件
Vue.use(VueRouter);

// 3、创建VueRouter对象并且配置好routes
const router = new VueRouter({
  routes: [
    // 主页
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/about',
      component: About
    }
  ],
  // 将默认的url显示默认修改为history
  mode: 'history'
});

// 4、导出router
export default router;
