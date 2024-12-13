import UserMessage from '../message/UserMessage';

class UserModule {
    constructor() {
        this.userMessage = new UserMessage();
    }

    async GetAllUsers() {
        return await this.userMessage.GetAllUsers();
    }

    async AddUser(user) {
        return await this.userMessage.AddUser(user);
    }
}

export default UserModule;
