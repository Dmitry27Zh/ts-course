export class Circle {
  protected static pi: number = 3.14

  public static calculateArea(radius: number) {
    return this.pi * radius ** 2
  }

  constructor(public radius: number) {}

  get area() {
    return Circle.pi * this.radius ** 2
  }
}

const c1 = new Circle(20)
// c1.pi // ---- error
Circle.calculateArea(10)
c1.radius
c1.area

class Ellipse extends Circle {
  constructor(public radius: number) {
    super(radius)
    Circle.pi
  }
}
