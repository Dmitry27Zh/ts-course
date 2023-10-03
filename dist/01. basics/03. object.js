"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car = {
    wheels: 4,
    brand: 'BMW',
    type: 'sedan',
};
// car.brand = {} ---- error
const car2 = {
    brand: 'BMW',
    type: '',
    wheels: 4,
};
car2.go = true; // ---- no error
car2['go'] = false; // ---- styleguide
