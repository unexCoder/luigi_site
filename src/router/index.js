import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import BioView from '../views/BioView.vue'
import WorksView from '../views/WorksView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/works',
    name: 'works',
    component: WorksView
  },
  {
    path: '/bio',
    name: 'bio',
    component: BioView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/:catchAll(.*)',
    name: 'not_found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
