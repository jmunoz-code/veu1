// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Contador from '../components/Contador.vue'; // Asegurate que esta ruta sea correcta

import ListaDeTareas from '@/components/ListaDeTareas.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Contador',
      name: 'contador',
      component: Contador,
    },
    {
        path: '/ListaDetareas',
        name: 'ListaDeTareas',
        component: ListaDeTareas,
      },
  ],
});

export default router;