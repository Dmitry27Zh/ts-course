export function keys<O extends object, U extends keyof O>(obj: O): U[] {
  const result = []
  const isKey = (key: any): key is U => obj.hasOwnProperty(key)

  for (let key in obj) {
    if (isKey(key)) {
      result.push(key)
    }
  }

  return result
}

export function keys2<O extends object>(obj: O): Extract<keyof O, string>[] {
  const result = []

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key)
    }
  }

  return result
}

export function keys3<O extends object>(obj: O): Array<keyof O> {
  const result = []

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key)
    }
  }

  return result
}

export function values<O extends object>(obj: O): O[keyof O][] {
  const result = []

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key])
    }
  }

  return result
}
