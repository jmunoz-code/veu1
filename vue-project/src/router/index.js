// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Contador from '../modules/contador/components/Contador.vue'; // Asegurate que esta ruta sea correcta
import ListaDeTareas from '../modules/listaDeTareas/components/ListaDeTareas.vue';

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
      {
        path: '/registrar',
        name: 'registrar',
        component: () => import('../modules/registro/views/RegistrarView.vue')
      },
  ],
});

export default router;