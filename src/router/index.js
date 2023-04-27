import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../views/RegistroColabsView.vue'),
    },
    {
      path: '/homeColabs',
      name: 'homeColabs',
      component: () => import('../views/HomeColabsView.vue'),
      children: [
        {
          path: 'inicioColabs',
          component: () => import('../components/InicioColabs.vue'),
        },
        {
          path: 'clientesColabs',

          component: () => import('../components/ClientesColabs.vue'),
        },
        {
          path: 'galeriaColabs',

          component: () => import('../components/GaleriaColabs.vue'),
        },
        {
          path: 'seguridadColabs',

          component: () => import('../components/SeguridadColabs.vue'),
        },
        {
          path: 'serviciosColabs',

          component: () => import('../components/ServiciosColabs.vue'),
        },
        {
          path: 'configuracionColabs',

          component: () => import('../components/ConfiguracionColabs.vue'),
        },
        {
          path: 'ayudaColabs',

          component: () => import('../components/AyudaColabs.vue'),
        },
      ],
    },
  ],
});

export default router;
