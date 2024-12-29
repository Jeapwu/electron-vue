import UpdateModule from "./UpdateModule";
import UserModule from "./UserModule";
import ControlModule from "./ControlModule";

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
            console.warn(`Module "${name}" is already registered. Skipping...`);
            return;
        }
        this.modules.set(name, module);
        console.log(`Module "${name}" registered successfully.`);
    }

    GetModule(name) {
        if (!this.modules.has(name)) {
            throw new Error(`Module "${name}" is not found.`);
        }
        return this.modules.get(name);
    }

    RegisterModules() {
        const modules = {
            UpdateModule,
            UserModule,
            ControlModule,
        };

        Object.entries(modules).forEach(([name, ModuleClass]) => {
            try {
                const moduleInstance = new ModuleClass();
                this.AddModule(name, moduleInstance);
            } catch (error) {
                console.error(`Failed to register module "${name}": ${error.message}`);
            }
        });
    }
}

const manager = new ModuleManager(); 
Object.freeze(manager);
export default manager;
