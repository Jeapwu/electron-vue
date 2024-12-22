import UserModule from "./UserModule";

class ModuleManager {
    constructor() {
        if (ModuleManager.instance) {
            return ModuleManager.instance;
        }

        this.modules = new Map();
        ModuleManager.instance = this;
        this.RegisterModules();
    }

    AddModule(name, module) {
        if (this.modules.has(name)) {
            throw new Error(`Module with name "${name}" is already registered.`);
        }
        this.modules.set(name, module);
    }

    GetModule(name) {
        if (!this.modules.has(name)) {
            throw new Error(`Module with name "${name}" is not found.`);
        }
        return this.modules.get(name);
    }

    RegisterModules() {
        try {
            this.AddModule("UserModule", new UserModule());
        } catch (error) {
            console.error(`Failed to register module ": ${error.message}`);
        }
    }
}

const manager = new ModuleManager(); 
Object.freeze(manager);
export default manager;
