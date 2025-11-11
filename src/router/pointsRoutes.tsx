import { createRouter, createWebHistory } from '@ionic/vue-router'
import PointsListView.tsx from '@/views/PointsListView.tsx'
import PointDetailView.tsx from '@/views/PointsListView.tsx'

const routes = [
  { path: '/', redirect: '/welcome' },
  { path: '/welcome', component: PointsListView.tsx },
  { path: '/Registro de puntos', component: PointsListView.tsx },
  {
    path: '/PointDetail/',
    component: PointDetailView.tsx
    children: [
      { path: '', redirect: '/tabs/training' },
      { path: 'id', component: () => import('@/views/PointsListView.tsx') },
      { path: 'title', component: () => import('@/views/PointsListView.tsx') },
      { path: 'description', component: () => import('@/views/PointsListView.tsx') },
      { path: 'date', component: () => import('@/views/PointsListView.tsx') },
      { path: 'status', component: () => import('@/views/PointsListView.tsx') },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
