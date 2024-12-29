// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('Api', {
    invoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args),
    send: (channel, data) => ipcRenderer.send(channel, data),
    recv: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args))
});