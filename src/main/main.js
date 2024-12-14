const { app, BrowserWindow } = require('electron');
const path = require('path');
const HandlerManager = require('./handler/HandlerManager');
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // 启用 Node.js 集成
      contextIsolation: false, // 禁用上下文隔离
      preload: path.join(__dirname, 'preload.js'), // 使用 preload 脚本（推荐）
    },
  });
  const manager = HandlerManager.RegisterHandlers();
  if (!app.isPackaged) {
    mainWindow.loadURL("http://localhost:5173/");
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }
});

