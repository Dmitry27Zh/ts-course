enum ShapeKind {
  Circle, // 0
  Square, // 1
}

const myShape = ShapeKind.Circle
myShape.toFixed() // ---- default number type

interface Circle {
  kind: ShapeKind.Circle
  radius: number
}

interface Square {
  kind: ShapeKind.Square
  sideLength: number
}

const circle1: Circle = {
  // kind: ShapeKind.Square, ---- error
  radius: 6,
  kind: 0, // ---- no error
}

enum StatusCode {
  ERROR = 500,
  NOT_FOUND = 404,
  NOT_AUTH = 403,
}

enum Grade {
  Junior = 'junior',
  Middle = 'middle',
  Senior = 'senior',
}

function levelUp(worker: { level: Grade }) {
  if (worker.level === Grade.Junior) {
    worker.level = Grade.Middle
  } else if (worker.level === Grade.Middle) {
    worker.level = Grade.Senior
  }
}

// levelUp({ level: 'junior' }) ---- error
levelUp({ level: Grade.Junior }) // ---- no error
