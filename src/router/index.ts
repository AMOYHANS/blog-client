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
    path: '/login', component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/register', component: () => import('@/pages/register/index.vue'),
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: constantRoutes
})

export default router