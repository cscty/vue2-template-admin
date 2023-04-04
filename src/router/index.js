import VueRouter from 'vue-router'
export const routes = [
  { path: '/', redirect: { name: 'home' } },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    children: [
      {
        path: 'main1',
        name: 'main1',
        component: () => import('../views/main1/index.vue'),
      },
      {
        path: 'main2',
        name: 'main2',
        component: () => import('../views/main2/index.vue'),
      },
      {
        path: 'main3',
        name: 'main3',
        component: () => import('../views/main3/index.vue'),
      },
      {
        path: 'main4',
        name: 'main4',
        component: () => import('../views/main4/index.vue'),
      },
    ],
  },
]
const router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? '/vue2' : '/',
  mode: 'history',
  routes,
})

export default router
