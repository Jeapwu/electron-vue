import UserService from "../service/UserService";

class UserModule {
    constructor() {
        this.users = []; // 定义状态
    }

    // 设置用户列表
    setUsers(users) {
        this.users = users;
    }

    // 添加单个用户
    addUser(user) {
        this.users.push(user);
    }

    // 异步获取用户列表
    async fetchUsers() {
        const users = await UserService.getAllUsers();
        this.setUsers(users); // 调用类的方法
    }

    // 异步添加用户
    async addUser(user) {
        const newUser = await UserService.addUser(user);
        this.addUser(newUser); // 调用类的方法
    }
}

export default UserModule;
