import { useUpdateStore } from '@/render/stores/UpdateStore';

class UpdateService {
    constructor() {
        this.ReadyToShow();
        this.UpdateAvailable();
        this.UpdateNotAvailable();
        this.UpdateDownloaded();
        this.CheckingForUpdate();
        this.DownloadProgress();
        this.Error();
    }

    async ReadyToShow() {
        await window.Api.recv('ReadyToShow', (data) => {
            console.log(data);
        });
    }

    async UpdateAvailable() {
        await window.Api.recv('UpdateAvailable', (data) => {
            const updateStore = useUpdateStore();
            updateStore.SetStatus(data);
        });
    }

    async UpdateNotAvailable() {
        await window.Api.recv('UpdateNotAvailable', (data) => {
            console.log(data);
        });
    }

    async UpdateDownloaded() {
        await window.Api.recv('UpdateDownloaded', (data) => {
            console.log(data);
        });
    }

    async CheckingForUpdate() {
        await window.Api.recv('CheckingForUpdate', (data) => {
            console.log(data);
        });
    }

    async DownloadProgress() {
        await window.Api.recv('DownloadProgress', (data) => {
            const updateStore = useUpdateStore();
            updateStore.SetProgress(data);
        });
    }

    async Error() {
        await window.Api.recv('Error', (data) => {
            console.log(data);
        });
    }

    async Close() {
        await window.Api.invoke('Update:Close', null);
    }

    async ResetScreen(size) {
        await window.Api.invoke('Update:ResetScreen', size);
    }

    async ShowPage() {
        await window.Api.invoke('Update:ShowPage', null);
    }

    async ToggleUpdate() {
        await window.Api.invoke('Update:ToggleUpdate', null);
    }
}

export default UpdateService;