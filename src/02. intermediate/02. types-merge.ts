type Union1 = 'a' | 'b' | 'c' | 'd'
type Union2 = 'a' | 'e' | 'c' | 'i'
type Union3 = Union1 | Union2
type Union4 = Union1 & Union2 // union intersection

type Obj1 = { a: string; b: string; c: number }

type Obj2 = Obj1 & {
  d: boolean
}

const obj2: Obj2 = {
  a: '',
  b: '',
  c: 2,
  d: true,
} // object union
