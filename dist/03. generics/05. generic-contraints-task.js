"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.values = exports.keys3 = exports.keys2 = exports.keys = void 0;
function keys(obj) {
    const result = [];
    const isKey = (key) => obj.hasOwnProperty(key);
    for (let key in obj) {
        if (isKey(key)) {
            result.push(key);
        }
    }
    return result;
}
exports.keys = keys;
function keys2(obj) {
    const result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(key);
        }
    }
    return result;
}
exports.keys2 = keys2;
function keys3(obj) {
    const result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(key);
        }
    }
    return result;
}
exports.keys3 = keys3;
function values(obj) {
    const result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key]);
        }
    }
    return result;
}
exports.values = values;
