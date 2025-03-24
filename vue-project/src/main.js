// main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa tu enrutador desde router.js

createApp(App)
  .use(router) // Usa el enrutador
  .mount('#app');