const UserService = require('../service/UserService');

class UserModule {
    constructor() {
        this.namespaced = true; // 启用命名空间
        this.state = {
            users: [],
        };
        this.mutations = {
            setUsers: this.setUsers.bind(this),
            addUser: this.addUser.bind(this),
        };
        this.actions = {
            fetchUsers: this.fetchUsers.bind(this),
            addUser: this.addUserAction.bind(this),
        };
    }

    // Mutation: 设置用户列表
    setUsers(state, users) {
        state.users = users;
    }

    // Mutation: 添加用户
    addUser(state, user) {
        state.users.push(user);
    }

    // Action: 获取用户列表
    async fetchUsers({ commit }) {
        const users = await UserService.getAllUsers();
        commit('setUsers', users);
    }

    // Action: 添加用户
    async addUserAction({ commit }, user) {
        const newUser = await UserService.addUser(user);
        commit('addUser', newUser);
    }
}

// 导出实例
export default new UserModule();
