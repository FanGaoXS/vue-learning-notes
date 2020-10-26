// 需要引入vue和vue-router
import Vue from 'vue';
import VueRouter from "vue-router";

// 全局加载vue-router
Vue.use(VueRouter);

// 以懒加载的方式引入组件
const Home = () => import('../components/Home');
const About = () => import('../components/About');

// 创建router对象并且导出
export default new VueRouter({
  routes:[
    // 主页重定向到home
    {
      path: '/',
      redirect: '/home'
    },
    // Home组件的路由
    {
      path: '/home',
      component: Home,
    },
    // About组件的路由
    {
      path: '/about',
      component: About
    },
  ]
})
