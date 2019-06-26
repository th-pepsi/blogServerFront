import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import BlogList from '@/components/blogList'
import BlogNew from '@/components/blogNew'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/blogList',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '/blogNew',
      name: 'BlogNew',
      component: BlogNew
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
