import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);
const stores = createPinia();
app.use(router);
app.use(stores);
app.mount('#app');
