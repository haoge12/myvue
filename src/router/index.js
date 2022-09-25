import Vue from 'vue'
import Router from 'vue-router'
import Login from "../pages/Login";
import Main from "../pages/Main";
import Content from "../pages/Content";
import Content1 from "../pages/Content1";
import Content2 from "../pages/Content2";
import Main1 from "../pages/Main1";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/main',
      component: Main,
      // children:[{
      //   path: 'content',
      //   name: "Content",
      //   component: Content,
      //   props: true
      // }],
    },
    {
      path: '/content',
      name: "Content",
      component: Content,
      props: true
      },
    //   {
    //   path: '/content:path',
    //   component: Content,
    //   props: true
    //   },
    {
      path: '/login',
      component: Login
    },

  ]
});
