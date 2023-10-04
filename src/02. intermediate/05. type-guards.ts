type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(animal: Fish | Bird): animal is Fish {
  return 'swim' in animal
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    return animal.swim()
  }

  animal.fly()
}

function isNull(val: any): val is null {
  // ---- wrong
  return !val
}

const empty = ''
const zero = 0

if (isNull(empty)) {
  empty // ---- never
}

function isNull2(val: any): val is null {
  // ---- danger

  return true
}

if (isNull(2)) {
  zero // ---- 0
}
