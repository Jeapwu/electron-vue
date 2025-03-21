const { ipcMain } = require('electron');
const ModuleManager = require('../module/ModuleManager');

class UpdateHandler {
    constructor() {
        this.updateModule = ModuleManager.GetModule("UpdateModule");
        if (!this.updateModule) {
            throw new Error("updateModule is not initialized.");
        }

        ipcMain.handle('Update:Close', async () => {
            return await this.updateModule.Close();
        });

        ipcMain.handle('Update:ResetScreen', async (event, size) => {
            return await this.updateModule.ResetScreen(size);
        })
    }
}

module.exports = UpdateHandler;