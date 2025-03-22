import { defineStore } from 'pinia';
import ServiceManager from '@/render/service/ServiceManager'

const useUserStore = defineStore('userStore', {
    state: () => ({
        users: [],
    }),

    actions: {
        async fetchUsers() {
            const userService = ServiceManager.GetService('UserService');
            this.users = await userService.fetchUsers();
        },

        async addUser(user) {
            const userService = userService.GetService('UserService');
            this.users.push(user);
        },
    }
});

const store = useUserStore()
const service = ServiceManager.GetService('UserService');
service.Init(store)
export default store;