// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import FAQs from './components/FAQs.vue';
import Settings from './components/Settings.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/faqs', component: FAQs },
  { path: '/settings', component: Settings }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
