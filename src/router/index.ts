import * as VueRouter from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/', component: () => import('@/pages/home/index.vue'),
  },
  {
    path: '/home', component: () => import('@/pages/home/index.vue'),
  },
  {
    path: '/login', component: () => import('@/pages/register/index.vue'),
    meta:{
      isLogin: true
    }
  },
  {
    path: '/register', component: () => import('@/pages/register/index.vue'),
    meta:{
      isLogin: false
    }
  },
  {
    path: '/write', component: () => import('@/pages/write/index.vue'),
  },
  {
    path: '/setting', component: () => import('@/pages/setting/index.vue'),
  },
  {
    path: '/post', component: () => import('@/pages/post/index.vue'),
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: constantRoutes
})

export default router