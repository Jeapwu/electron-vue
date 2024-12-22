const { app, BrowserWindow } = require('electron');
const MainScreen = require("./MainScreen");
const ModuleManager = require("./module/ModuleManager")

global.mainScreen = null;

app.on('ready', () => {
  if(global.mainScreen === null) {
    global.mainScreen = new MainScreen();
  }
  const updateModule = ModuleManager.GetModule("UpdateModule");
  updateModule.CheckForUpdates();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    if(global.mainScreen === null) {
      global.mainScreen = new MainScreen();
    }
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

