// Array<string>
// string[]
// Promise<number>

type TypeFactory<T> = T
type XType = TypeFactory<string>
type XType2 = TypeFactory<number>
type XType3 = TypeFactory<boolean>

function toArray<T>(...arg: T[]): T[] {
  return arg
}

toArray(1, 2, 3)
toArray('')
toArray<number>(1, 2, 3)

export function head2(value: string): string
export function head2<T>(value: readonly T[]): T
export function head2(value: readonly []): undefined

export function head2(value: string | readonly any[] | readonly []): any | undefined {
  return value[0]
}

const head1 = <T>(value: T[]) => value[0]

interface ModelData<T> {
  title: string
  value: T
}

const obj: ModelData<number> = {
  title: 'asd',
  value: 12,
}

// obj.value = true ---- error

const obj2: ModelData<Array<number>> = {
  title: '',
  value: [1],
}
