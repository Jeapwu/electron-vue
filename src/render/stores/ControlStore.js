import { defineStore } from 'pinia';
import ServiceManager from '@/render/service/ServiceManager'

const useControlStore = defineStore('controlStore', {
    state: () => ({}),

    actions: {
        async Minimize() {
            const controlService = ServiceManager.GetService('ControlService');
            await controlService.Minimize();
        },

        async Maximize() {
            const controlService = ServiceManager.GetService('ControlService');
            await controlService.Maximize();
        },

        async Close() {
            const controlService = ServiceManager.GetService('ControlService');
            await controlService.Close();
        },
    }
});

const store = useControlStore()
const service = ServiceManager.GetService('ControlService');
service.Init(store)
export default store;