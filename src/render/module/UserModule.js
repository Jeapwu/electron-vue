import UserService from '../service/UserService';

class UserModule {
    constructor() {
        this.namespaced = true;
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

    setUsers(state, users) {
        state.users = users;
    }

    addUser(state, user) {
        state.users.push(user);
    }

    async fetchUsers({ commit }) {
        const users = await UserService.getAllUsers();
        commit('setUsers', users);
    }

    async addUserAction({ commit }, user) {
        const newUser = await UserService.addUser(user);
        commit('addUser', newUser);
    }
}

export default UserModule;
