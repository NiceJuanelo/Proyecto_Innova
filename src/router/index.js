import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('../views/WelcomeCard.vue'),
    },
    {
      path: '/registro-cliente',
      name: 'RCliente',
      component: () => import('../views/RegisterClient.vue')
    }
  ],
});

export default router;
