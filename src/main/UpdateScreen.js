const { app, BrowserWindow } = require("electron");
const path = require("path");

class UpdateScreen {
    constructor() {
        const parentBounds = global.mainScreen.window.getBounds();
        this.window = new BrowserWindow({
            width: 450, height: 280,
            x: parentBounds.x + (parentBounds.width - 450) / 2,
            y: parentBounds.y + (parentBounds.height - 280) / 2,
            parent: global.mainScreen.window,
            modal: true, frame: false,
            minimizable: false, // 禁用最小化按钮
            maximizable: false, // 禁用最大化按钮e
            resizable: false, movable: false, show: false,
            autoHideMenuBar: true, // 隐藏菜单栏
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
            this.window.hide();
        });
    }

    Closed() {
        this.window.on('closed', () => {
            this.window = null;
        });
    }

    LoadHtml() {
        if (!app.isPackaged) {
            this.window.loadURL("http://localhost:5173/#/update");
        } else {
            const distPath = path.join(__dirname, '../../dist/index.html');
            this.window.loadFile(distPath, { hash: 'update' });
        }
    }

    SendMessage(channel, message) {
        console.log('send msg:', channel, message);
        if (this.window && this.window.webContents) {
            this.window.webContents.send(channel, message);
        } else {
            console.error('Window or webContents is not initialized.');
        }
    }
}

module.exports = UpdateScreen;