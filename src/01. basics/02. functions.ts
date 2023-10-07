function sum(a: number, b: number): number {
  return a + b
}

// sum(2) ---- error
// sum(1, '2') ---- error

function log(name: string, userId?: string): void {
  console.log('Hello', name, 'with id', userId ?? 'unknown')
}

log('User', '222')

function crash(): never {
  throw new Error('crash')
}

export function average(...nums: number[]) {
  const sum = nums.reduce((sum, current) => {
    console.log(current.toString())

    return sum + current
  }, 0)

  return sum / nums.length
}
