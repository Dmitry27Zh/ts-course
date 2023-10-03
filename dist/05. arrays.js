"use strict";
const numbers = [1, 2, 3, '', true]; // ---- (string | number | boolean)[]
const random = []; // ---- any[]
random.push(22);
random.push('11'); // ---- no error
const strings = [];
// strings.push(1) ---- error
// alternate syntax
const alternateStrings = [];
const myCar = {
    wheels: 4,
    brand: 'BMW',
    type: 'sedan',
};
const cars = [];
// cars.push({ sound: 'whwhwhwh' }) ------ error
cars.push(myCar); // ---- no error
const arrOfArr = [];
// arrOfArr.push('') ---- error
// arrOfArr.push([2]) ---- error
arrOfArr.push(['']); // ---- no error
function printArr(arr) {
    arr.forEach((item, index, array) => {
        console.log('built in method auto types');
    });
}
