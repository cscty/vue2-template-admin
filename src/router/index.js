export const routes = [
  { path: '/', redirect: { name: 'main3' } },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    children: [
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
