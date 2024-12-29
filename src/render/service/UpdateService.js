
class UpdateService {
    static async ReadyToShow(callback) {
        return await window.Api.recv('ReadyToShow', callback);
    }

    static async UpdateAvailable(callback) {
        return await window.Api.recv('UpdateAvailable', callback);
    }

    static async UpdateNotAvailable(callback) {
        return await window.Api.recv('UpdateNotAvailable', callback);
    }

    static async UpdateDownloaded(callback) {
        return await window.Api.recv('UpdateDownloaded', callback);
    }

    static async Error(callback) {
        return await window.Api.recv('Error', callback);
    }
}

export default UpdateService;