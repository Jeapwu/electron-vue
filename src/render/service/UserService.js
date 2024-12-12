const { ipcRenderer } = require('electron');

class UserService {
    static async GetAllUsers() {
        return await ipcRenderer.invoke('User:GetAllUsers');
    }

    static async AddUser(user) {
        return await ipcRenderer.invoke('User:AddUser', user);
    }
}

module.exports = UserService;