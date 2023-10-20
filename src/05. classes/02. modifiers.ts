export class Vehicle {
  public drive(speed: number): void {
    console.log('Let us go with speed', speed.toFixed())
    this.log(speed)
  }
  public stop() {
    console.log('Stopped')
  }
  private log(speed: number) {
    console.log('Vehicle has changed the speed to', speed)
  }
  protected alternativeLog(text: string) {
    console.log(text)
  }
}

class Car extends Vehicle {
  public changeSpeed(speed: number) {
    this.drive(speed)
    // this.log(speed) // ---- error
    this.alternativeLog('speed was changed') // ---- no error
  }
}

const car1 = new Car()
car1.drive(100)
car1.stop()
// car1.log(33) // ---- error
// car1.changeSpeed() // ---- error
