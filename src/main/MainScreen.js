const { app, BrowserWindow } = require("electron");
const path = require("path");

class MainScreen {
    constructor() {
        this.window = new BrowserWindow({
            width: 980, height: 720, frame: false,
            webPreferences: {
                contextIsolation: true, // 隔离上下文，避免主进程和渲染进程直接共享对象
                nodeIntegration: false, // 禁用 Node.js 集成
                enableRemoteModule: false, // 禁用远程模块（如果不需要）
                sandbox: true, // 启用沙盒模式
                preload: path.join(__dirname, "./preload.js"),
            },
        });
        this.ReadyToShow();
        this.LoadHtml();
    }

    ReadyToShow() {
        this.window.once("ready-to-show", () => {
            this.window.show();
            this.SendMessage("ReadyToShow", `Checking for updates. Current version ${app.getVersion()}`);

            setTimeout(() => {
                global.mainScreen.SendMessage('UpdateAvailable', { version: '1.2.3', notes: 'Bug fixes and improvements.' });
              }, 2000);
              
              setTimeout(() => {
                global.mainScreen.SendMessage('UpdateDownloaded', { path: '/path/to/file', size: '45MB' });
              }, 3000);
              
              setTimeout(() => {
                global.mainScreen.SendMessage('Error', { code: 500, message: 'Server not reachable.' });
              }, 4000);
        });
    }

    LoadHtml() {
        if (!app.isPackaged) {
            this.window.loadURL("http://localhost:5173/");
        } else {
            this.window.loadFile(path.join(__dirname, '../../dist/index.html'));
        }
    }

    SendMessage(channel, message) {
        console.log(channel, message);
        this.window.webContents.send(channel, message);
    }
}

module.exports = MainScreen;