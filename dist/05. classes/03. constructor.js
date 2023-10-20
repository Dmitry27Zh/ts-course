export class Vehicle {
    constructor(createdAt) {
        this.createdAt = createdAt;
    }
    log(speed) {
        console.log('Vehicle has changed the speed to', speed);
        console.log('Created at', this.createdAt);
    }
}
class Car extends Vehicle {
    constructor(color, maxSpeed) {
        super(new Date());
        this.color = color;
        this.maxSpeed = maxSpeed;
        // this.color = color // ---- not needed
        // this.maxSpeed = maxSpeed
    }
}
const car1 = new Car('red', 200);
console.log(car1);
