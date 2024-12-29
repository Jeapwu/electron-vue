
class UpdateService {
    static async ReadyToShow(callback) {
        await window.Api.recv('ReadyToShow', callback);
    }

    static async UpdateAvailable(callback) {
        await window.Api.recv('UpdateAvailable', callback);
    }

    static async UpdateNotAvailable(callback) {
        await window.Api.recv('UpdateNotAvailable', callback);
    }

    static async UpdateDownloaded(callback) {
        await window.Api.recv('UpdateDownloaded', callback);
    }

    static async Error(callback) {
        await window.Api.recv('Error', callback);
    }
}

export default UpdateService;