const { app, BrowserWindow } = require("electron");
const path = require("path");

class MainScreen {
    constructor() {
        this.window = new BrowserWindow({
            width: 980, height: 720,
            webPreferences: {
                nodeIntegration: true, // 启用 Node.js 集成
                contextIsolation: true, // 禁用上下文隔离
                preload: path.join(__dirname, "./preload.js"),
            },
        });
        this.ReadyToShow();
        this.LoadHtml();
    }

    ReadyToShow() {
        this.window.once("ready-to-show", () => {
            this.window.show();
            this.ShowMessage("UpdateReply", `Checking for updates. Current version ${app.getVersion()}`);
        });
    }

    LoadHtml() {
        if (!app.isPackaged) {
            this.window.loadURL("http://localhost:5173/");
        } else {
            this.window.loadFile(path.join(__dirname, '../../dist/index.html'));
        }
    }

    ShowMessage(channel, message) {
        this.window.webContents.send(channel, message);
    }
}

module.exports = MainScreen;