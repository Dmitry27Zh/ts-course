abstract class Vehicle {
  abstract color: string
  abstract drive(speed: number): void
  public drive2(speed: number): void {
    console.log('Let us go with speed', speed.toFixed())
  }
  public stop() {
    console.log('Stopped')
  }
}

class Car extends Vehicle {
  constructor(public color: string) {
    super()
  }
  drive(speed: number): void {
    console.log(speed)
  }
}

// const v1 = new Vehicle() // ---- error
