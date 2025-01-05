import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Main', component: () => import('./screen/MainScreen.vue') },
  { path: '/update', name: 'Update', component: () => import('./screen/component/general/Update.vue') },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
