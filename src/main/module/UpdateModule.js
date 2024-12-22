const { autoUpdater } = require("electron-updater");
const { app } = require("electron");

class UpdateModule {
    constructor() {
        this.UpdateAvailable();
        this.UpdateNotAvailable();
        this.UpdateDownloaded();
        this.Error();
    }

    CheckForUpdates() {
        autoUpdater.checkForUpdates();
    }

    UpdateAvailable() {
        autoUpdater.on("update-available", (info) => {
            console.log(info);
            global.mainScreen.ShowMessage("UpdateReply", `Update available. Current version ${app.getVersion()}`);
            let path = autoUpdater.downloadUpdate();
            global.mainScreen.ShowMessage("UpdateReply", path);
        });
    }

    UpdateNotAvailable() {
        autoUpdater.on("update-not-available", (info) => {
            console.log(info);
            global.mainScreen.ShowMessage("UpdateReply", `No update available. Current version ${app.getVersion()}`);
        });
    }

    UpdateDownloaded() {
        autoUpdater.on("update-downloaded", (info) => {
            console.log(info);
            global.mainScreen.ShowMessage("UpdateReply", `Update downloaded. Current version ${app.getVersion()}`);

            setTimeout(() => {
                global.mainScreen.ShowMessage("UpdateReply", "The application will restart to apply the update.");
                autoUpdater.quitAndInstall();
            }, 1000);
        });
    }

    Error() {
        autoUpdater.on("error", (info) => {
            global.mainScreen.ShowMessage("UpdateReply", info);
        });
    }
}

module.exports = UpdateModule;