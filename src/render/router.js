import { createRouter, createWebHashHistory } from 'vue-router';
import MainScreen from './screen/MainScreen.vue'

const routes = [
  { path: '/', name: 'Main', component: MainScreen },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
