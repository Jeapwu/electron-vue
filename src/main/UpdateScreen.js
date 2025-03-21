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
            resizable: false,
            movable: false,
            show: false,
            autoHideMenuBar: true, // 隐藏菜单栏
            webPreferences: {
                preload: `${__dirname}/preload.js`,
                contextIsolation: true,
                nodeIntegration: false,
            },
        });
        this.ReadyToShow();
        this.LoadHtml();
        this.Closed();
    }

    ReadyToShow() {
        this.window.once("ready-to-show", () => {
            this.window.show();
            this.SendMessage("ReadyToShow", `Checking for updates. Current version ${app.getVersion()}`);
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
        console.log(channel, message);
        this.window.webContents.send(channel, message);
    }
}

module.exports = UpdateScreen;