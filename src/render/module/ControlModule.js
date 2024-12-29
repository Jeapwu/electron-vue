import ControlService from "../service/ControlService";

class ControlModule {
    constructor() {}
    
    async Minimize() {
        return await ControlService.Minimize();
    }

    async Maximize() {
        await ControlService.Maximize();
    }

    async Close() {
        await ControlService.Close();
    }
}

export default ControlModule;