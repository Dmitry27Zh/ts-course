export class Car {
    go() {
        // ---- no-error
        console.log("Let's go with speed");
    }
    stop() {
        console.log('Stopped');
    }
}
const car = new Car();
// car.maxSpeed = 200 // ---- error
