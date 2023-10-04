"use strict";
// Create two variants: aliases and interfaces
// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product,+Vehicle
Object.defineProperty(exports, "__esModule", { value: true });
const car = {
    price: 100000,
    isNew: true,
    model: 'Accord',
    title: 'Modern car',
    isSale: false,
    wheels: 4,
    brand: 'Honda',
    type: 'sedan',
    year: 2023,
};
const iCar = {
    price: 200000,
    isNew: true,
    model: 'Escalade',
    title: 'Modern car',
    isSale: false,
    wheels: 4,
    brand: 'Cadilac',
    type: 'suv',
    year: 2023,
};
