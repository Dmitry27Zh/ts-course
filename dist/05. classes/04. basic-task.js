export class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    log() {
        console.log(`New Rectangle was created at ${new Date(Date.now())}`);
    }
}
class Square extends Rectangle {
    constructor(width, color) {
        super(width, width);
        this.width = width;
        this.color = color;
    }
}
const square1 = new Square(10, 'red');
