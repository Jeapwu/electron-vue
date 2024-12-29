
class ControlModule {
    constructor() {}

    async Minimize() {
        if (global.mainScreen) {
            global.mainScreen.window.minimize();
        }
    }

    async Maximize() {
        if (global.mainScreen) {
            if (global.mainScreen.window.isMaximized()) {
                global.mainScreen.window.unmaximize();
            } else {
                global.mainScreen.window.maximize();
            }
        }
    }

    async Close() {
        if (global.mainScreen) {
            global.mainScreen.window.close();
        }
    }
}

module.exports = ControlModule;
