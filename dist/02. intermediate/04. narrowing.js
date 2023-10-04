"use strict";
function example1(x) {
    if (typeof x === 'string') {
        x.toLowerCase();
    }
    else if (typeof x === 'number') {
        x.toFixed(2);
    }
    else if (x === undefined) {
        console.log('no value');
    }
    else {
        console.log('never', x);
    }
}
function example2(strs) {
    if (typeof strs === 'object') {
        console.log('null is also object');
    }
    if (strs && typeof strs === 'object') {
        console.log('Array');
    }
}
function example3(x) {
    if (x instanceof Date) {
        x.getDate();
    }
    else {
        x.concat(1, 2, 3);
    }
}
function move(animal) {
    if ('swim' in animal) {
        return animal.swim();
    }
    animal.fly();
}
