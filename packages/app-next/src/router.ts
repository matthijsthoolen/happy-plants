import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
import { routes as welcome } from './modules/welcome'
import { routes as login } from './modules/login'
import { routes as onboarding } from './modules/onboarding'
import { routes as home } from './modules/home'
import { routes as watering } from './modules/watering'
import { routes as addnew } from './modules/new'
import { routes as settings } from './modules/settings'
import { routes as plant } from './modules/plant'
import { routes as debug } from './modules/debug'
import { routes as notfound } from './modules/404'
import store from './store'

Vue.use(VueRouter)

export function createRouter(): VueRouter {
  const router: VueRouter = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      { path: '/', redirect: '/home' },
      ...welcome,
      ...login,
      ...onboarding,
      ...home,
      ...watering,
      ...addnew,
      ...settings,
      ...plant,
      ...debug,
      ...notfound,
    ],
    scrollBehavior(to: Route, from: Route, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
  })

  router.beforeEach(async (to: Route, from: Route, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth && store.state.user.authenticated === false) {
      next('welcome')
    } else {
      next()
    }
  })

  return router
}

export default createRouter()
