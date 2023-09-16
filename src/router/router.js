import { createRouter, createWebHistory } from 'vue-router'

// import all future components to link to (e.g. Home, About, Shop,...)
import HomePage from '@/views/HomePage.vue'
import SponsorsPage from '@/views/SponsorsPage.vue'
import MembershipPage from '@/views/MembershipPage.vue'
import AboutUs from '@/views/AboutUs.vue'
import EventsPage from '@/views/EventsPage.vue'
import RecruitmentPage from '@/views/RecruitmentPage.vue'

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
    path: '/sponsors',
    component: SponsorsPage
  },
  {
    path: '/membership',
    component: MembershipPage
  },
  {
    path: '/events',
    component: EventsPage
  },
  {
    path: '/recruitment',
    component: RecruitmentPage
  },
  
]

// the magical stuff
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return {
      behavior: 'smooth',
      top: 0
    }
  },
})

export default router
