import { ipcMain } from 'electron';
import UserModule from '../module/UserModule';

class UserHandler {
    constructor() {
        this.userModule = new UserModule();
        ipcMain.handle('User:GetAllUsers', async () => {
            return await UserModule.GetAllUsers();
        });

        ipcMain.handle('User:AddUser', async (user) => {
            return await UserModule.AddUser(user);
        });
    }
}

export default UserHandler;

