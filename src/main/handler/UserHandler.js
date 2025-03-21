const { ipcMain } = require('electron');
const ModuleManager = require('../module/ModuleManager');

class UserHandler {
    constructor() {
        this.userModule = ModuleManager.GetModule("UserModule");
        ipcMain.handle('User:GetAllUsers', async () => {
            return await this.userModule.GetAllUsers();
        });

        ipcMain.handle('User:AddUser', async (user) => {
            return await this.userModule.AddUser(user);
        });
    }
}

module.exports = UserHandler;

