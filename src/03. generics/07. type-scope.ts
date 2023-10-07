export function tupleCreator<T>(first: T) {
  return function <U>(second: U): [T, U] {
    return [first, second]
  }
}

const toTupleWith = tupleCreator(1) // ---- [number, U]
const val1 = toTupleWith(2)
const val2 = toTupleWith('str')
