import { createRouter, createWebHashHistory  } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import ProjectView from '../views/ProjectView.vue'
import ResumeView from '../views/ResumeView.vue'
import ContactView from '../views/ContactView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-me',
      name: 'about',
      component: AboutMeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectView
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/:catchAll(.*)',
      component: PageNotFoundView
    }
  ]
})

export default router
