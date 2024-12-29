const { ipcMain } = require('electron');
const ModuleManager = require('../module/ModuleManager');

class ControlHandler {
    constructor() {
        this.controlModule = ModuleManager.GetModule("ControlModule");
        if (!this.controlModule) {
            throw new Error("ControlModule is not initialized.");
        }

        ipcMain.handle('Control:Minimize', async () => {
            return await this.controlModule.Minimize();
        });

        ipcMain.handle('Control:Maximize', async () => {
            return await this.controlModule.Maximize();
        });

        ipcMain.handle('Control:Close', async () => {
            return await this.controlModule.Close();
        });
    }
}

module.exports = ControlHandler;