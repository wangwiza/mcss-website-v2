import { createRouter, createWebHistory } from 'vue-router'

// import all future components to link to (e.g. Home, About, Shop,...)
import HomePage from '../views/HomePage.vue'
import AboutUs from '../views/AboutUs.vue'
import EventsPage from '../views/EventsPage.vue'

// make routes for router to route to
const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutUs
  },
  {
    path: '/events',
    component: EventsPage
  }
]

// the magical stuff
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
