import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Signin from '@/views/Signin'
import Signup from '@/views/Signup'
import Todo from '@/views/Todo'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes // （缩写）相当于 routes: routes
})

export default router
