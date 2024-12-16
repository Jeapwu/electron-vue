const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require("electron-updater");
const MainScreen = require("./MainScreen");
const HandlerManager = require('./handler/HandlerManager');

let mainScreen;

app.on('ready', () => {
  mainScreen = new MainScreen();
  autoUpdater.checkForUpdates();
  const manager = HandlerManager.RegisterHandlers();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    mainScreen = new MainScreen();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.commandLine.appendSwitch('high-dpi-support', 'true'); // 开启高 DPI 支持
app.commandLine.appendSwitch('force-device-scale-factor', '1.0'); // 强制缩放比例

autoUpdater.on("update-available", (info) => {
  mainScreen.showMessage(`Update available. Current version ${app.getVersion()}`);
  let path = autoUpdater.downloadUpdate();
  mainScreen.showMessage(path);
});

autoUpdater.on("update-not-available", (info) => {
  mainScreen.showMessage(`No update available. Current version ${app.getVersion()}`);
});

autoUpdater.on("update-downloaded", (info) => {
  mainScreen.showMessage(`Update downloaded. Current version ${app.getVersion()}`);
});

autoUpdater.on("error", (info) => {
  mainScreen.showMessage(info);
});

