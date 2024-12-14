import { defineStore } from 'pinia';
import UserModule from '../module/UserModule';

const userModule = new UserModule();

export const useUserStore = defineStore('userStore', {
    state: () => ({
        users: [],
    }),

    actions: {
        async fetchUsers() {
            this.users = await userModule.fetchUsers();
        },

        async addUser(user) {
            this.users.push(user);
        },
    }
});