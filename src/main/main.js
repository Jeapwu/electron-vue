const { app, BrowserWindow } = require('electron');
const MainScreen = require("./MainScreen");
const HandlerManager = require('./handler/HandlerManager');

global.mainScreen = null;

app.on('ready', () => {
  if (global.mainScreen === null) {
    global.mainScreen = new MainScreen();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    if (global.mainScreen === null) {
      global.mainScreen = new MainScreen();
    }
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

