import { createRouter, createWebHistory } from 'vue-router'
import MonitorView from '@/views/MonitorView.vue'

const routes = [
  {
    path: '/',
    name: 'monitor',
    component: MonitorView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
