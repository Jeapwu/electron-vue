const UserMessage = require('../message/UserMessage');

module.exports = {
    async GetAllUsers() {
        return UserMessage.GetAllUsers();
    },
};
