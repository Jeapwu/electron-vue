const { ipcMain } = require('electron');

function UserHandler() {
    ipcMain.handle('GetAllUsers', async () => {
        const UserModule = require('../module/UserModule');
        return await UserModule.GetAllUsers();
    });
}

module.exports = UserHandler;

