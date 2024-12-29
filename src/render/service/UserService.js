
class UserService {
    static async GetAllUsers() {
        return await window.Api.invoke('User:GetAllUsers');
    }

    static async AddUser(user) {
        return await window.Api.invoke('User:AddUser', user);
    }
}

export default UserService;