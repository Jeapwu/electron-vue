import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from './screen/HomeScreen.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeScreen },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
