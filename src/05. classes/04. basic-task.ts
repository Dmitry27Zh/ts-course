export class Rectangle {
  constructor(public width: number, public height: number) {}

  public area() {
    return this.width * this.height
  }

  private log() {
    console.log(`New Rectangle was created at ${new Date(Date.now())}`)
  }
}

class Square extends Rectangle {
  constructor(public width: number, public color: string) {
    super(width, width)
  }
}

const square1 = new Square(10, 'red')
