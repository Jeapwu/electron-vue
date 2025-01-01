const { autoUpdater } = require("electron-updater");
const { app } = require("electron");

class UpdateModule {
    constructor() {
        this.Initialize();
        this.UpdateAvailable();
        this.UpdateNotAvailable();
        this.UpdateDownloaded();
        this.CheckingForUpdate();
        this.DownloadProgress();
        this.Error();
        this.CheckForUpdates();
    }

    Initialize() {
    }

    CheckForUpdates() {
        autoUpdater.checkForUpdates();
    }

    UpdateAvailable() {
        autoUpdater.on("update-available", (info) => {
            console.log(info);
            global.mainScreen.SendMessage("UpdateAvailable", `Update available. Current version ${app.getVersion()}`);
            let path = autoUpdater.downloadUpdate();
            global.mainScreen.SendMessage("UpdateAvailable", path);
        });
    }

    UpdateNotAvailable() {
        autoUpdater.on("update-not-available", (info) => {
            console.log(info);
            global.mainScreen.SendMessage("UpdateNotAvailable", `No update available. Current version ${app.getVersion()}`);
        });
    }

    UpdateDownloaded() {
        autoUpdater.on("update-downloaded", (info) => {
            console.log(info);
            global.mainScreen.SendMessage("UpdateDownloaded", `Update downloaded. Current version ${app.getVersion()}`);

            setTimeout(() => {
                global.mainScreen.SendMessage("UpdateDownloaded", "The application will restart to apply the update.");
                autoUpdater.quitAndInstall();
            }, 1000);
        });
    }

    CheckingForUpdate() {
        autoUpdater.on("checking-for-update", () => {
            console.log("Checking for updates...");
            global.mainScreen.SendMessage("CheckingForUpdate", "Checking for updates...");
        });
    }

    DownloadProgress() {
        autoUpdater.on("download-progress", (progressInfo) => {
            console.log("Download progress:", progressInfo);
            const message = `Download speed: ${progressInfo.bytesPerSecond} - 
                Downloaded ${progressInfo.percent}% (${progressInfo.transferred}/${progressInfo.total})`;
            global.mainScreen.SendMessage("DownloadProgress", message);
        });
    }

    Error() {
        autoUpdater.on("error", (info) => {
            global.mainScreen.SendMessage("Error", info);
        });
    }
}

module.exports = UpdateModule;