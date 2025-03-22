
class ControlService {
    constructor() {
        this.store = null;
    }

    async Init(store) {
        this.store = store;
    }

    async Minimize() {
        await window.Api.invoke('Control:Minimize');
    }

    async Maximize() {
        await window.Api.invoke('Control:Maximize');
    }

    async Close() {
        await window.Api.invoke('Control:Close');
    }
}

export default ControlService;