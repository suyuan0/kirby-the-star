import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      /**
       * 路由重定向，当路由为 / 时，会跳转难道登录路由上
       */
      path: '/',
      redirect: '/Gasp'
    },
    {
      path: '/Index',
      name: 'Index',
      component: () => import(`../views/IndexView.vue`)
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import(`../views/LoginView.vue`)
    },
    {
      path: '/Map',
      name: 'Map',
      component: () => import(`../views/MapView.vue`)
    },
    {
      path: '/Game',
      name: 'Game',
      component: () => import(`../views/GameView.vue`)
    },
    {
      path: '/Gasp',
      name: 'Gasp',
      component: () => import(`../views/GaspView.vue`)
    },
    {
      path: '/Pixi',
      name: 'Pixi',
      component: () => import(`../views/PixiView.vue`)
    },
    {
      path: '/Cut',
      name: 'Cut',
      component: () => import(`../views/CutView.vue`)
    },
    {
      path: '/Kirby',
      name: 'Kirby',
      component: () => import(`../views/KirbyView.vue`)
    }
  ]
})

export default router
