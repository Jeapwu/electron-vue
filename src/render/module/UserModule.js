import UserService from "../service/UserService";

class UserModule {
    constructor() {}
    
    // 异步获取用户列表
    async fetchUsers() {
        return await UserService.GetAllUsers();
    }

    // 异步添加用户
    async addUser(user) {
        await UserService.AddUser(user);
    }
}

export default UserModule;
