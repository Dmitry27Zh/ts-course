"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    go() {
        // ---- no-error
        console.log("Let's go with speed");
    }
    stop() {
        console.log('Stopped');
    }
}
exports.Car = Car;
const car = new Car();
// car.maxSpeed = 200 // ---- error
