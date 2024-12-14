import { defineStore } from 'pinia';
import UserModule from '../module/UserModule';

const userModule = new UserModule();

export const useUserStore = defineStore('user', {
    // 绑定状态
    state: () => ({
        users: userModule.users,
    }),

    // 定义方法，将类方法代理到 Store 中
    actions: {
        setUsers(users) {
            userModule.setUsers.call(this, users); // 确保上下文一致
            this.users = userModule.users;
        },
        addUser(user) {
            userModule.addUser.call(this, user); // 确保上下文一致
            this.users = userModule.users;
        },
        async fetchUsers() {
            await userModule.fetchUsers.call(this);
            this.users = userModule.users;
        },
        async addUserAction(user) {
            await userModule.addUserAction.call(this, user);
            this.users = userModule.users;
        },
    },
});
