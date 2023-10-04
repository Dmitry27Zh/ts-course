function append<T>(el: T, list: readonly T[]) {
  return list.concat(el)
}

// append<number>(2, [null]) ---- error
append<string>('ss', ['2'])
