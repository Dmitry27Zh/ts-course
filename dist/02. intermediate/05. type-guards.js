"use strict";
function isFish(animal) {
    return 'swim' in animal;
}
function move(animal) {
    if (isFish(animal)) {
        return animal.swim();
    }
    animal.fly();
}
function isNull(val) {
    // ---- wrong
    return !val;
}
const empty = '';
const zero = 0;
if (isNull(empty)) {
    empty; // ---- never
}
function isNull2(val) {
    // ---- danger
    return true;
}
if (isNull(2)) {
    zero; // ---- 0
}
