import { defineStore } from 'pinia';
import ModuleManager from '../module/ModuleManager';

const userModule = ModuleManager.GetModule("UserModule");

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