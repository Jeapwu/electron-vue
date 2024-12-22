// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    send: (channel, data) => ipcRenderer.send(channel, data),
    recv: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args))
});