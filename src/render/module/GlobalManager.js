import { createStore } from 'vuex';
import counter from './modules/counter';

class StoreManager {
    constructor() {
        this.store = createStore({
            modules: {
                counter,
            },
        });
    }

    getStore() {
        return this.store;
    }
}

export default new StoreManager();