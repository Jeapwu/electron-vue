export default {
    async GetAllUsers() {
        // 从 Electron 主进程获取数据
        console.log(111);
        const users = await window.User.GetAllUsers();
        return users;
    },
};
