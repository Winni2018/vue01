import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {   //登录
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login'], resolve),
    },
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/components/index'], resolve),
      redirect: {name: 'carousel'},
      children: [
        {
          path: '/home/carousel',
          name: 'carousel',
          component: resolve => require(['@/components/home/carousel'], resolve),
        },
      ]
    }
  ]
})
