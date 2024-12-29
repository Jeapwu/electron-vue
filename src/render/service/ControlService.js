class ControlService {
    static async Minimize() {
        return await window.Api.invoke('Control:Minimize');
    }

    static async Maximize() {
        return await window.Api.invoke('Control:Maximize');
    }

    static async Close() {
        return await window.Api.invoke('Control:Close');
    }
}

export default ControlService;