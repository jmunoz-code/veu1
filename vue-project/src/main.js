// main.js (o main.ts)
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Suponiendo que tienes un router
import { createPinia } from 'pinia'; // Importa createPinia

const pinia = createPinia(); // Crea una instancia de Pinia
const app = createApp(App);

app.use(pinia); // Instala Pinia
app.use(router);
app.mount('#app');