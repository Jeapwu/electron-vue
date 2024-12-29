import { defineStore } from 'pinia';
import ModuleManager from '../module/ModuleManager';

const controlModule = ModuleManager.GetModule("ControlModule");

export const useControlStore = defineStore('controlStore', {
    state: () => ({}),

    actions: {
        async Minimize() {
            this.users = await controlModule.Minimize();
        },

        async Maximize() {
            this.users = await controlModule.Maximize();
        },

        async Close() {
            this.users = await controlModule.Close();
        },
    }
});