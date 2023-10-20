export class Temperature {
  constructor(public celsius: number) {}

  get fahrenheit() {
    return this.celsius * 1.8 + 32
  }

  set fahrenheit(value: number) {
    this.celsius = (value - 32) / 1.8
  }

  public static fromFarenheit(value: number): Temperature {
    return new Temperature(Math.round((value - 32) / 1.8))
  }
}

Temperature.fromFarenheit(63)
const t1 = new Temperature(25)
t1.fahrenheit = 44
