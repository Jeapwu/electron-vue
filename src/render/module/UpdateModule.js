import UpdateService from "../service/UpdateService";

class UpdateModule {
    constructor() { }

    async ReadyToShow(SetStatus) {
        await UpdateService.ReadyToShow(SetStatus);
    }

    async UpdateAvailable(SetStatus) {
        
        await UpdateService.UpdateAvailable(SetStatus);
    }

    async UpdateNotAvailable(SetStatus) {

        await UpdateService.UpdateNotAvailable(SetStatus);
    }

    async UpdateDownloaded(SetStatus) {
        await UpdateService.UpdateDownloaded(SetStatus);
    }

    async CheckingForUpdate(SetStatus) {
        await UpdateService.CheckingForUpdate(SetStatus);
    }

    async DownloadProgress(SetStatus) {
        await UpdateService.DownloadProgress(SetStatus);
    }

    async Error(SetStatus) {
        await UpdateService.Error(SetStatus);
    }

    async Close() {
        await UpdateService.Close();
    }
}

export default UpdateModule;