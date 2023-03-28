import { createRouter, createWebHistory } from 'vue-router'
import {useUserStore} from "../stores/users";

import Start from '../pages/Start.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: '/',
          name: 'Start',
          component: Start,
      },
      {
          path: '/create',
          name: 'Create',
          component: () => import('../pages/CreateArticle.vue'),
          meta: {requiresAuth: true}
      },
      {
          path: '/edit/:id(\\d+)',
          name: 'Edit',
          component: () => import('../pages/EditArticle.vue'),
          meta: {requiresAuth: true}
      },
      {
          path: '/article/:id(\\d+)',
          name: 'Article',
          component: () => import('../pages/Article.vue'),
      },
      {
          path: '/login',
          name: 'Login',
          component: () => import('../pages/Login.vue'),
      }
  ]
})

router.beforeEach((to) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth && !userStore.authenticated) {
    return '/login'
  }
})

export default router
