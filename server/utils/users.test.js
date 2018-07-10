const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: '1',
                username: 'Test1',
                room: 'Room1'
            },
            {
                id: '2',
                username: 'Test2',
                room: 'Room2'
            },
            {
                id: '3',
                username: 'Test3',
                room: 'Room1'
            }
        ];
    });

    it('should add new user', () => {
        const users = new Users();
        const user = {
            id: '123',
            username: 'Test',
            room: 'Office'
        };
        const responseUser = users.addUser(user.id, user.username, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        const userId = '3';
        const user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        const userId = '99';
        const user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        const userId = '3';
        const user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find a user', () => {
        const userId = '99';
        const user = users.getUser(userId);

        expect(user).toBeFalsy();
    });

    it('should return usernames for Room1', () => {
        const userList = users.getUserList('Room1');
        expect(userList).toEqual(['Test1', 'Test3']);
    });

    it('should return usernames for Room2', () => {
        const userList = users.getUserList('Room2');
        expect(userList).toEqual(['Test2']);
    });
});
