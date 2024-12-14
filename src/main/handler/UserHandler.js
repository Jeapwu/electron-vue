const { ipcMain } = require('electron');
const UserModule = require('../module/UserModule');

class UserHandler {
    constructor() {
        this.userModule = new UserModule();
        ipcMain.handle('User:GetAllUsers', async () => {
            return await this.userModule.GetAllUsers();
        });

        ipcMain.handle('User:AddUser', async (user) => {
            return await this.userModule.AddUser(user);
        });
    }
}

module.exports = UserHandler;

