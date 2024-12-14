const UserHandler = require('./UserHandler');

class HandlerManager {
    constructor() {
        this.handlers = new Map();
    }

    AddHandler(name, handler) {
        if (this.handlers.has(name)) {
            throw new Error(`Handler with name "${name}" is already registered.`);
        }
        this.handlers.set(name, handler);
    }

    GetHandler(name) {
        if (!this.handlers.has(name)) {
            throw new Error(`Handler with name "${name}" is not found.`);
        }
        return this.handlers.get(name);
    }

    static RegisterHandlers() {
        const manager = new HandlerManager();
        manager.AddHandler('UserHandler', new UserHandler());
        return manager;
    }
}

module.exports = HandlerManager;