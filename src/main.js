import './assets/styles/fonts.css';
import './assets/styles/main.css';
import './assets/styles/tailwind.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './app.vue';
import { routes } from './router/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
