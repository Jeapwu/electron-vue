const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const HandlerFactory = require("./handler/RegisterHandler");
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 预加载脚本
    },
  });
  HandlerFactory.RegisterHandler();
  if (!app.isPackaged) {
    mainWindow.loadURL("http://localhost:5173/");
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }
});

