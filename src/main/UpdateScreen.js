const { app, BrowserWindow } = require("electron");
const path = require("path");

class UpdateScreen {
    constructor() {
        const parentBounds = global.mainScreen.window.getBounds();
        this.window = new BrowserWindow({
            width: 500, height: 300,
            x: parentBounds.x + (parentBounds.width - 400) / 2,
            y: parentBounds.y + (parentBounds.height - 300) / 2,
            parent: global.mainScreen.window,
            modal: true,
            resizable: false,
            movable: false,
            show: false,
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