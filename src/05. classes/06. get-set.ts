export class Rectangle {
  constructor(public width: number, public height: number) {}

  get area(): number {
    return this.width * this.height
  }
}

const rect1 = new Rectangle(20, 12)
rect1.area

class Car {
  constructor(public color: string, private _maxSpeed: number) {}

  get maxSpeed() {
    return this._maxSpeed
  }
  set maxSpeed(speed: number) {
    if (speed > 0) {
      this._maxSpeed = speed
    }
  }
}

const c1 = new Car('green', 300)
// c1._maxSpeed // ---- error
c1.maxSpeed = 100
