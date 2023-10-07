"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.length = void 0;
function length(arg) {
    return arg.length;
}
exports.length = length;
length('abc');
length([1, 2, 3]);
length({ length: 3 });
const obj1 = { a: '1' };
// length(obj1) ---- error
