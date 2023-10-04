function example1(x?: number | string) {
  if (typeof x === 'string') {
    x.toLowerCase()
  } else if (typeof x === 'number') {
    x.toFixed(2)
  } else if (x === undefined) {
    console.log('no value')
  } else {
    console.log('never', x)
  }
}

function example2(strs: string | string[] | null) {
  if (typeof strs === 'object') {
    console.log('null is also object')
  }

  if (strs && typeof strs === 'object') {
    console.log('Array')
  }
}

function example3(x: number[] | Date) {
  if (x instanceof Date) {
    x.getDate()
  } else {
    x.concat(1, 2, 3)
  }
}

type Fish = { swim: () => void }
type Bird = { fly: () => void }

export function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim()
  }

  animal.fly()
}
