import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import element from 'element-plus';
import './style.css'

const app = createApp(App);
const stores = createPinia();
app.use(router);
app.use(stores);
app.use(element);
app.mount('#app');
