import { createRouter, createWebHashHistory } from 'vue-router';
import UserScreen from './screen/UserScreen.vue';

const routes = [
  { path: '/', name: 'User', component: UserScreen },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
