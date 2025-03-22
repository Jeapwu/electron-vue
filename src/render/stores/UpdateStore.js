import { defineStore } from 'pinia';
import ServiceManager from '@/render/service/ServiceManager'

const useUpdateStore = defineStore('updateStore', {
    state: () => ({
        status: null,
        progress: 0,
    }),

    actions: {
        async SetStatus(status) {
            this.status = status;
            const updateService = ServiceManager.GetService('UpdateService');
            updateService.ShowPage();
        },

        async Close() {
            const updateService = ServiceManager.GetService('UpdateService');
            updateService.Close();
        },

        async ResetScreen(size) {
            const updateService = ServiceManager.GetService('UpdateService');
            updateService.ResetScreen(size);
        },

        async SetProgress(progress) {
            this.progress =  parseInt(progress);
        },

        async ToggleUpdate() {
            const updateService = ServiceManager.GetService('UpdateService');
            updateService.ToggleUpdate();
        }
    }
});

const store = useUpdateStore()
const service = ServiceManager.GetService('UpdateService');
service.Init(store)
export default store;