const { contextBridge, ipcRenderer } = require('electron');

// 安全暴露 IPC 通信方法
contextBridge.exposeInMainWorld('User', {
    GetAllUsers: () => ipcRenderer.invoke('GetAllUsers'),
});
