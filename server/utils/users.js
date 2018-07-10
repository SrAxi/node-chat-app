class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, username, room) {
        const user = { id, username, room };
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        const foundUser = this.getUser(id);
        if (foundUser) {
            this.users = this.users.filter(user => user.id !== id);
        }
        return foundUser;
    }

    getUser(id) {
        return this.users.filter(user => user.id === id)[0];
    }

    getUserList(room) {
        return this.users
            .filter(user => user.room === room)
            .map(user => user.username);
    }
}

module.exports = { Users };