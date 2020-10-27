
// 1、引入vue-router和vue
import VueRouter from 'vue-router';
import Vue from 'vue';

// 利用懒加载的方式加载页面
const Home = () => import('../components/Home');
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');


const About = () => import('../components/About');
const User = () => import('../components/User');
const Profile = () => import('../components/Profile')

// 2、用vue.use()全局使用vue-router插件
Vue.use(VueRouter);

// 3、创建router对象并且导出
export default new VueRouter({
  //配置路由和页面的映射关系
  routes: [
    {
      //网站进去的第一个页面
      path: '/',
      // 重定向到/home的url
      redirect: '/home'
    },
    {
      // 输入/home时就会跳转到Home页面
      path: '/home',
      component: Home,
      // 子路由组件
      children:[
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
    {
      // 输入/about时就会跳转到About页面
      path: '/about',
      component: About
    },
    {
      path: '/user/:userId',
      component: User
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  // 将默认的url显示默认修改为history
  mode: 'history',
  // router-link被选中时添加class属性active
  linkActiveClass: 'active'
});
