const { ipcRenderer } = require('electron');

class UserService {
    static async GetAllUsers() {
        console.log(1111);
        return await ipcRenderer.invoke('User:GetAllUsers');
    }

    static async AddUser(user) {
        return await ipcRenderer.invoke('User:AddUser', user);
    }
}

export default UserService;