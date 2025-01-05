const { autoUpdater } = require("electron-updater");
const { app } = require("electron");
const LogHelper = require('../../helper/LogHelper');
const UpdateScreen = require("../UpdateScreen");

class UpdateModule {
    constructor() {
        this.Initialize();
        this.UpdateAvailable();
        this.UpdateNotAvailable();
        this.UpdateDownloaded();
        this.CheckingForUpdate();
        this.DownloadProgress();
        this.Error();
    }

    Initialize() {
    }

    CheckForUpdates() {
        autoUpdater.checkForUpdates();
    }

    UpdateAvailable() {
        autoUpdater.on("update-available", (info) => {
            LogHelper.debug(info);
            this.updateScreen.SendMessage("UpdateAvailable", `Update available. Current version ${app.getVersion()}`);
            const path = autoUpdater.downloadUpdate();
            this.updateScreen.SendMessage("UpdateAvailable", path);
        });
    }

    UpdateNotAvailable() {
        autoUpdater.on("update-not-available", (info) => {
            LogHelper.debug(info);
            this.updateScreen.SendMessage("UpdateNotAvailable", `No update available. Current version ${app.getVersion()}`);
        });
    }

    UpdateDownloaded() {
        autoUpdater.on("update-downloaded", (info) => {
            LogHelper.debug(info);
            this.updateScreen.SendMessage("UpdateDownloaded", `Update downloaded. Current version ${app.getVersion()}`);

            setTimeout(() => {
                this.updateScreen.SendMessage("UpdateDownloaded", "The application will restart to apply the update.");
                autoUpdater.quitAndInstall();
            }, 1000);
        });
    }

    CheckingForUpdate() {
        autoUpdater.on("checking-for-update", () => {
            LogHelper.debug("Checking for updates...");
            this.updateScreen = new UpdateScreen();
            this.updateScreen.SendMessage("CheckingForUpdate", "Checking for updates...");
        });
    }

    DownloadProgress() {
        autoUpdater.on("download-progress", (progressInfo) => {
            LogHelper.debug("Download progress:", progressInfo);
            const message = `Download speed: ${progressInfo.bytesPerSecond} - 
                Downloaded ${progressInfo.percent}% (${progressInfo.transferred}/${progressInfo.total})`;
            this.updateScreen.SendMessage("DownloadProgress", message);
        });
    }

    Error() {
        autoUpdater.on("error", (info) => {
            this.updateScreen.SendMessage("Error", info);
        });
    }
}

module.exports = UpdateModule;