"use strict";
const st = 'error';
// const st2: Status = 'errors' // ---- error
function prindID(id) {
    // console.log(id.toUpperCase()) ---- error
    if (typeof id === 'string') {
        console.log(id.toUpperCase()); // ---- no error
    }
    else {
        console.log(id);
    }
}
function welcome(person) {
    if (Array.isArray(person)) {
        console.log('Hello', person.join(' '));
        return 2;
    }
    else {
        console.log('Hello', person);
        return 'sss';
    }
}
