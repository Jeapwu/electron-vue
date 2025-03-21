import { defineStore } from 'pinia';
import ModuleManager from '../module/ModuleManager';

const updateModule = ModuleManager.GetModule("UpdateModule");

export const useUpdateStore = defineStore('updateStore', {
    state: () => ({
        status: '',
    }),

    actions: {
        async AutoBind() {
            updateModule.ReadyToShow(this.SetStatus);
            updateModule.UpdateAvailable(this.SetStatus);
            updateModule.UpdateNotAvailable(this.SetStatus);
            updateModule.UpdateDownloaded(this.SetStatus);
            updateModule.CheckingForUpdate(this.SetStatus);
            updateModule.DownloadProgress(this.SetStatus);
            updateModule.Error(this.SetStatus);
        },

        async SetStatus(status) {
            this.status = status;
        },

        async Close() {
            await updateModule.Close();
        },
    }
});