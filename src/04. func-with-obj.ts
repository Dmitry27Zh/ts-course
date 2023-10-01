function printPoint(point: { x: string; y: string }): void {
  console.log(`Coordinate of the point is x: ${point.x} y: ${point.y}`)
}

const obj1 = {
  x: '1',
  y: '2',
}

const obj2 = {
  x: '1',
  y: '2',
  z: '4',
}

printPoint(obj1)
printPoint(obj2) // ---- no error

function printName(user: { firstName: string; lastName?: string }): void {
  console.log('Hello', user.firstName.toUpperCase())

  if (user.lastName) {
    console.log('Nice to meet you Mr.', user.lastName.toUpperCase()) // ---- no error
  }

  console.log('Nice to meet you Mr.', user.lastName.toUpperCase()) // ---- error
}
