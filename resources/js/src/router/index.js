import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destinasi',
      name: 'destinations',
      // Lazy loading: komponen hanya di-load saat dibutuhkan
      component: () => import('../views/DestinationsView.vue')
    },
    {
      path: '/destinasi/:id', // Rute dinamis untuk detail
      name: 'destination-detail',
      component: () => import('../views/DestinationDetailView.vue')
    },
    {
      path: '/event',
      name: 'events',
      component: () => import('../views/EventsView.vue')
    },
    {
      path: '/event/:id', // Rute dinamis dengan parameter id
      name: 'event-detail',
      component: () => import('../views/EventDetailView.vue')
    },
    {
      path: '/tentang',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ],
  // Fungsi ini akan membuat halaman scroll ke atas saat berganti rute
  scrollBehavior(to, from, savedPosition) {
    // Jika ada posisi scroll yang tersimpan (misalnya saat navigasi back/forward),
    // kembalikan ke posisi tersebut.
    if (savedPosition) {
      return savedPosition
    }
    // Jika tidak, scroll ke atas dengan animasi yang halus.
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
