const UserHandler = require('./UserHandler');
const ControlHandler = require('./ControlHandler');
const LogHelper = require('../../helper/LogHelper');

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
            LogHelper.warn(`Handler "${name}" is already registered. Skipping...`);
            return;
        }
        this.handlers.set(name, handler);
        LogHelper.debug(`Handler "${name}" registered successfully.`);
    }

    GetHandler(name) {
        if (!this.handlers.has(name)) {
            throw new Error(`Handler "${name}" is not found.`);
        }
        return this.handlers.get(name);
    }

    RegisterHandlers() {
        const handlers = {
            UserHandler,
            ControlHandler,
        };

        Object.entries(handlers).forEach(([name, HandlerClass]) => {
            try {
                const handlerInstance = new HandlerClass();
                this.AddHandler(name, handlerInstance);
            } catch (error) {
                LogHelper.error(`Failed to register handler "${name}": ${error.message}`);
            }
        });
    }
}

const manager = new HandlerManager();
Object.freeze(manager);
module.exports = manager;