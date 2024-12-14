class UserMessage {
    constructor() {
        this.users = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
        ];
    }

    GetAllUsers() {
        return Promise.resolve(this.users);
    }

    AddUser(user) {
        this.users.push(user);
        return Promise.resolve(user);
    }
}

module.exports = UserMessage;