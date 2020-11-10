// 导入Vue和VueRouter
import Vue from "vue";
import VueRouter from "vue-router";

// 懒加载组件
const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const Shopcart = () => import('../views/shopcart/Shopcart');
const Profile = () => import('../views/profile/Profile');

// 全局使用VueRouter
Vue.use(VueRouter);

// 实例化router
const router=new VueRouter({
  routes:[
    // 主页
    {
      path: '/',
      redirect: '/home'
    },
    // Home页
    {
      path: '/home',
      component: Home
    },
    // Category页
    {
      path: '/category',
      component: Category
    },
    // Shopcart页
    {
      path: '/shopcart',
      component: Shopcart
    },
    // Profile页
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history'
});

// 导出router
export default router;
