import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: ['/home', '/index', '/main'],
      meta: {
        requiresLogin: false,
        requiresActivatedAccount: false
      },
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      meta: {
        requiresLogin: false,
        requiresActivatedAccount: false
      },
      component: () => import('../views/AuthView.vue')
    },
    {
      path: '/challenge',
      name: 'chanllnege',
      meta: {
        requiresLogin: true,
        requiresActivatedAccount: true
      },
      component: () => import('../views/ChallengeView.vue')
    },
    {
      path: '/rank',
      name: 'rank',
      meta: {
        requiresLogin: true,
        requiresActivatedAccount: true
      },
      component: () => import('../views/RankView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        requiresLogin: true,
        requiresActivatedAccount: false
      },
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/team',
      name: 'team',
      meta: {
        requiresLogin: true,
        requiresActivatedAccount: true
      },
      component: () => import('../views/TeamView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      meta: {
        requiresLogin: false,
        requiresActivatedAccount: false
      },
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
