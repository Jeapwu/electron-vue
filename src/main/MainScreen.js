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
        this.Closed();
    }

    ReadyToShow() {
        this.window.once("ready-to-show", () => {
            this.window.show();
        });
    }

    Closed() {
        this.window.on('closed', () => {
            this.window = null;
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