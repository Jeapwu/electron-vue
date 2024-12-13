import { createStore } from 'vuex';
import UserModule from './module/UserModule';

const userModule = new UserModule();

const store = createStore({
    modules: {
        user: userModule,
    },
});

export default store;
