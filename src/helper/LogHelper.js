const log = require('electron-log');
const path = require('path');
const fs = require('fs');
const { app } = require('electron');

class LogHelper {
    constructor() {
        if (LogHelper.instance) {
            return LogHelper.instance;
        }
        this.logPath = path.join(app.getPath('userData'), 'logs');
        this.log = log;
        this.Initialize();
        LogHelper.instance = this;
    }

    Initialize() {
        if (!fs.existsSync(this.logPath)) {
            fs.mkdirSync(this.logPath, { recursive: true });
        }
        this.log.transports.file.fileName = `App-${this.BuildTimestamp()}.log`;
        this.log.transports.file.resolvePathFn = () => path.join(this.logPath, this.log.transports.file.fileName);

        this.log.transports.file.level = 'debug';
        this.log.transports.console.level = 'debug';

        this.log.transports.file.format = `{y}-{m}-{d} {h}:{i}:{s} {level} [{text}]`;
        this.log.transports.console.format = `{y}-{m}-{d} {h}:{i}:{s} {level} [{text}]`;
    }

    BuildTimestamp(date = new Date()) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}${month}${day}-${hours}${minutes}${seconds}`;
    }

    GetThreadId() {
        return threadId ? threadId : process.pid;
    }

    AutoCleanLogs(daysToKeep = 7) {
        if (!fs.existsSync(this.logPath)) return;

        const files = fs.readdirSync(this.logPath);
        const cutoffDate = Date.now() - daysToKeep * 24 * 60 * 60 * 1000;

        files.forEach((file) => {
            const filePath = path.join(this.logPath, file);
            const stats = fs.statSync(filePath);

            if (stats.mtimeMs < cutoffDate) {
                fs.unlinkSync(filePath);
                console.log(`Deleted old log file: ${file}`);
            }
        });
    }

    info(...args) {
        this.log.info(...args);
    }

    warn(...args) {
        this.log.warn(...args);
    }

    error(...args) {
        this.log.error(...args);
    }

    debug(...args) {
        this.log.debug(...args);
    }
}

const instance = new LogHelper();
Object.freeze(instance);
module.exports = instance;