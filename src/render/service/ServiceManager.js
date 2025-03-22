import UpdateService from './UpdateService';
import ControlService from './ControlService';
import UserService from './UserService';

class ServiceManager {
    constructor() {
        if (ServiceManager.instance) {
            return ServiceManager.instance;
        }

        this.services = new Map();
        ServiceManager.instance = this;
        this.RegisterServices();
    }

    AddService(name, service) {
        if (this.services.has(name)) {
            console.warn(`Service "${name}" is already registered. Skipping...`);
            return;
        }
        this.services.set(name, service);
        console.log(`Service "${name}" registered successfully.`);
    }

    GetService(name) {
        if (!this.services.has(name)) {
            throw new Error(`Service "${name}" is not found.`);
        }
        return this.services.get(name);
    }

    RegisterServices() {
        const services = {
            UpdateService,
            ControlService,
            UserService,
        };

        Object.entries(services).forEach(([name, ServiceClass]) => {
            try {
                const serviceInstance = new ServiceClass();
                this.AddService(name, serviceInstance);
            } catch (error) {
                console.error(`Failed to register service "${name}": ${error.message}`);
            }
        });
    }
}

const manager = new ServiceManager();
Object.freeze(manager);
export default manager;