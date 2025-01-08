import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/', name: 'Main', component: () => import('./screen/MainScreen.vue'),
    children: [
      { path: '', redirect: '/home' },
      { path: 'home', name: 'Home', component: () => import('./screen/component/main/Home.vue') },
      { path: 'games', name: 'Games', component: () => import('./screen/component/main/Games.vue') },
      { path: 'member', name: 'Member', component: () => import('./screen/component/main/Member.vue') },
      { path: 'support', name: 'Support', component: () => import('./screen/component/main/Support.vue') },
    ],
  },
  { path: '/update', name: 'Update', component: () => import('./screen/component/general/Update.vue') },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
