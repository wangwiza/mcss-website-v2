import { createRouter, createWebHistory } from 'vue-router'

// import all future components to link to (e.g. Home, About, Shop,...)
import HomePage from '../views/HomePage.vue'
import AboutUs from '../views/AboutUs.vue'

// make routes for router to route to
const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutUs
  }
]

// the magical stuff
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
