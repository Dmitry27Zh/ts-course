interface ICar {
  go(speed: number): void
  maxSpeed?: number
}

export class Car implements ICar {
  go(): void {
    // ---- no-error
    console.log("Let's go with speed")
  }
  stop() {
    console.log('Stopped')
  }
}

const car = new Car()
// car.maxSpeed = 200 // ---- error
