import * as VueRouter from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import { useUserStore } from '@/store/user'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/', component: () => import('@/pages/home/index.vue'),
  },
  {
    path: '/home', component: () => import('@/pages/home/index.vue'),
  },
  {
    path: '/user/:id', component: () => import('@/pages/user/index.vue'),
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
    path: '/post/:id', component: () => import('@/pages/post/index.vue'),
  },
  {
    path: '/about', component: () => import('@/pages/about/index.vue'),
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: constantRoutes
})

router.beforeEach((to, from) => {
const {isLogin} = useUserStore()
  if(!isLogin && to.path !== '/login' && to.path !== '/register'){
    return '/login'
  }
})

export default router