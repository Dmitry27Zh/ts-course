"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    drive(speed) {
        console.log('Let us go with speed', speed.toFixed());
        this.log(speed);
    }
    stop() {
        console.log('Stopped');
    }
    log(speed) {
        console.log('Vehicle has changed the speed to', speed);
    }
    alternativeLog(text) {
        console.log(text);
    }
}
exports.Vehicle = Vehicle;
class Car extends Vehicle {
    changeSpeed(speed) {
        this.drive(speed);
        // this.log(speed) // ---- error
        this.alternativeLog('speed was changed'); // ---- no error
    }
}
const car1 = new Car();
car1.drive(100);
car1.stop();
// car1.log(33) // ---- error
// car1.changeSpeed() // ---- error
