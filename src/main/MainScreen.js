const { app, BrowserWindow } = require("electron");
const path = require("path");

class MainScreen {
    constructor() {
        this.window = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true, // 启用 Node.js 集成
                contextIsolation: false, // 禁用上下文隔离
                // preload: path.join(__dirname, 'preload.js'), // 使用 preload 脚本（推荐）
            },
        });

        this.window.once("ready-to-show", () => {
            //this.window.show();
            //this.showMessage(`Checking for updates. Current version ${app.getVersion()}`);
        });

        if (!app.isPackaged) {
            this.window.loadURL("http://localhost:5173/");
        } else {
            this.window.loadFile(path.join(__dirname, '../../dist/index.html'));
        }
    }
}

module.exports = MainScreen;