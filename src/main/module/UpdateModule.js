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
        autoUpdater.forceDevUpdateConfig = true;
        autoUpdater.autoDownload = false;
        autoUpdater.checkForUpdates();
    }

    UpdateAvailable() {
        autoUpdater.on("update-available", (info) => {
            LogHelper.debug(info);
            if (global.mainScreen) {
                if (!this.updateScreen) {
                    this.updateScreen = new UpdateScreen();
                }
                const meta = {
                    localVersion: app.getVersion(),
                    remoteVersion: info.version,
                };
                this.updateScreen.SendMessage("UpdateAvailable", meta);
            }
        });
    }

    StartDownloadUpdate() {
        const path = autoUpdater.downloadUpdate();
        this.updateScreen.SendMessage("UpdateAvailable", { msg: path });
    }

    UpdateNotAvailable() {
        autoUpdater.on("update-not-available", (info) => {
            LogHelper.debug(info);
            if (global.mainScreen) {
                global.mainScreen.window.show();
            }
            this.updateScreen.SendMessage("UpdateNotAvailable", { msg: `No update available. Current version ${app.getVersion()}` });
        });
    }

    UpdateDownloaded() {
        autoUpdater.on("update-downloaded", (info) => {
            LogHelper.debug(info);
            this.updateScreen.SendMessage("UpdateDownloaded", { msg: `Update downloaded. Current version ${app.getVersion()}` });

            setTimeout(() => {
                this.updateScreen.SendMessage("UpdateDownloaded", { msg: "The application will restart to apply the update." });
                autoUpdater.quitAndInstall();
            }, 1000);
        });
    }

    CheckingForUpdate() {
        autoUpdater.on("checking-for-update", () => {
            LogHelper.debug("Checking for updates...");
            this.updateScreen = new UpdateScreen();
            this.updateScreen.SendMessage("CheckingForUpdate", { msg: "Checking for updates..." });
        });
    }

    DownloadProgress() {
        autoUpdater.on("download-progress", (progressInfo) => {
            LogHelper.debug("Download progress:", progressInfo);
            const message = progressInfo.percent;
            this.updateScreen.SendMessage("DownloadProgress", message);
        });
    }

    Error() {
        autoUpdater.on("error", (info) => {
            this.updateScreen.SendMessage("Error", { msg: info });
        });
    }

    Close() {
        if (this.updateScreen) {
            this.updateScreen.window.close();
        }

        if (global.mainScreen) {
            global.mainScreen.window.show();
        }
    }

    ResetScreen(size) {
        if (this.updateScreen) {
            this.updateScreen.window.setResizable(true);
            this.updateScreen.window.setSize(size.width, size.height);
        }
    }

    ShowPage() {
        if (this.updateScreen) {
            this.updateScreen.window.show();
        }
    }
}

module.exports = UpdateModule;