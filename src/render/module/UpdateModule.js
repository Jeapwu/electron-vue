import UpdateService from "../service/ControlService";

class UpdateModule {
    constructor() {
    }

    async ReadyToShow() {
        return await UpdateService.ReadyToShow();
    }

    async UpdateAvailable() {
        return await UpdateService.UpdateAvailable();
    }

    async UpdateNotAvailable() {
        return await UpdateService.UpdateNotAvailable();
    }

    async UpdateDownloaded() {
        return await UpdateService.UpdateDownloaded();
    }

    async Error() {
        return await UpdateService.Error();
    }
}

export default UpdateModule;