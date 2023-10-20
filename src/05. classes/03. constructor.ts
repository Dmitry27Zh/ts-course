export class Vehicle {
  constructor(private createdAt: Date) {}

  private log(speed: number) {
    console.log('Vehicle has changed the speed to', speed)
    console.log('Created at', this.createdAt)
  }
}

class Car extends Vehicle {
  constructor(public color: string, protected maxSpeed: number) {
    super(new Date())
    // this.color = color // ---- not needed
    // this.maxSpeed = maxSpeed
  }
}

const car1 = new Car('red', 200)
console.log(car1)
