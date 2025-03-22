
class UserService {
    constructor() {
        this.store = null;
    }

    async Init(store) {
        this.store = store;
    }

    static async GetAllUsers() {
        return await window.Api.invoke('User:GetAllUsers');
    }

    static async AddUser(user) {
        return await window.Api.invoke('User:AddUser', user);
    }
}

export default UserService;