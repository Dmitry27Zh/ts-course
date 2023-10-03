"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
function login(user) {
    if (user.login.length > 0 && user.password.length > 0) {
        console.log('Hello', user.login);
    }
}
exports.login = login;
const user1 = {
    login: 'user123',
    email: 'asdf@jdj.org',
    password: '123456',
    isOnline: false,
    lastVisited: new Date(2023, 8, 30),
};
const user2 = {
    login: 'admin000',
    email: 'jsjsjs@sjjss.sjh',
    password: '676767',
    isOnline: true,
    lastVisited: new Date(),
    role: 'admin',
};
login(user1);
login(user2);
