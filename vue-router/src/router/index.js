
// 1、引入vue-router和vue
import VueRouter from 'vue-router';
import Vue from 'vue';

/*
  使用懒加载加载组件
 */
const Home = () => import('../components/Home');  // Home组件
const HomeNews = () => import('../components/HomeNews');  // HomeNews组件
const HomeMessage = () => import('../components/HomeMessage');  // HomeMessage组件

const About = () => import('../components/About');  // About组件
const User = () => import('../components/User');  // User组件
const Profile = () => import('../components/Profile');  // Profile组件

// 2、用vue.use()全局使用vue-router插件
Vue.use(VueRouter);

// 3、创建router对象并且导出
const router=new VueRouter({
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
      // 元数据
      meta: {
        // 网页标题
        title: '首页'
      },
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
      component: About,
      // 元数据
      meta: {
        // 网页标题
        title: '关于'
      },
    },
    {
      path: '/user/:userId',
      component: User,
      // 元数据
      meta: {
        // 网页标题
        title: '用户'
      },
    },
    {
      path: '/profile',
      component: Profile,
      // 元数据
      meta: {
        // 网页标题
        title: '档案'
      },
    }
  ],
  // 将默认的url显示默认修改为history
  mode: 'history',
  // router-link被选中时添加class属性active
  linkActiveClass: 'active'
});
// 前置守卫
router.beforeEach(function (to,from,next) {
  // 将网页的标题设置为route里meta里的title
  document.title=to.matched[0].meta.title;
  // 继续跳转到下一个route
  next();
})
// 导出router
export default router;
