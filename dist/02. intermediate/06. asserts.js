"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assertDisplayName(user) {
    if (!user.displayName) {
        throw new Error('User has no display name');
    }
}
function assertDisplayName2(user) {
    if (!user.displayName) {
        throw new Error('User has no display name');
    }
}
function logUserByDisplayName(user) {
    assertDisplayName(user);
    // console.log(user.displayName.toUpperCase()) // ---- error
    assertDisplayName2(user);
    console.log(user.displayName.toUpperCase()); // ---- no error
}
