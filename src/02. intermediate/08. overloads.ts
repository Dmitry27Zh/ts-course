function add(a: number, b: number): number
function add(a: string, b: string): string

function add(a: any, b: any): any {
  return a + b
}

// add(2, '2') ---- error
add(1, 1)

type AsyncCb = (res: number) => number

function asyncSum(a: number, b: number): Promise<number>

function asyncSum(a: number, b: number, c: AsyncCb): number

function asyncSum(a: number, b: number, c?: AsyncCb): any {
  const result = a + b

  if (c) {
    return c(result)
  }

  return Promise.resolve(result)
}

asyncSum(2, 2)

// output depends on input params
