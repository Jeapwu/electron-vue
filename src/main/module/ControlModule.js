
class ControlModule {
    constructor() {
    }

    async Minimize() {
        return await this.userMessage.GetAllUsers();
    }

    async Maximize() {
        return await this.userMessage.AddUser(user);
    }
}

module.exports = ControlModule;