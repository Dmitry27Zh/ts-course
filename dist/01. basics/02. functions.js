"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.average = void 0;
function sum(a, b) {
    return a + b;
}
// sum(2) ---- error
// sum(1, '2') ---- error
function log(name, userId) {
    console.log('Hello', name, 'with id', userId !== null && userId !== void 0 ? userId : 'unknown');
}
log('User', '222');
function crash() {
    throw new Error('crash');
}
function average(...nums) {
    const sum = nums.reduce((sum, current) => {
        console.log(current.toString());
        return sum + current;
    }, 0);
    return sum / nums.length;
}
exports.average = average;
