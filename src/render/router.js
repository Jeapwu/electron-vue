import { createRouter, createWebHistory } from 'vue-router';
import UserScreen from './screen/UserScreen.vue';

const routes = [
  { path: '/', name: 'User', component: UserScreen },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
