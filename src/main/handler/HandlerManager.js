const UserHandler = require('./UserHandler');

class HandlerManager {
    constructor() {
        if (HandlerManager.instance) {
            return HandlerManager.instance;
        }

        this.handlers = new Map();
        HandlerManager.instance = this;
        this.RegisterHandlers();
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

    RegisterHandlers() {
        try {
            this.AddHandler("UserHandler", new UserHandler());
        } catch (error) {
            console.error(`Failed to register handler ": ${error.message}`);
        }
    }
}

const manager = new HandlerManager();
Object.freeze(manager);
module.exports = manager;