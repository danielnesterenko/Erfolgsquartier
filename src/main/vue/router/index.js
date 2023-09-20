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
