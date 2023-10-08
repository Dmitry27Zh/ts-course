type T0 = Exclude<'a' | 'b' | 'c', 'a'>
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'd'>
type T3 = Exclude<string | number | (() => void), Function>

export type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504
type NumericStatus = Exclude<Status, string>
type TextStatus = Exclude<Status, number>

type T00 = Extract<'a' | 'b' | 'c', 'a'>
type T01 = Extract<'a' | 'b' | 'c', 'a' | 'd'>
type T03 = Extract<string | number | (() => void), Function>

interface Person {
  age: number
  firstName: string
  lastName: string
  sex: 'male' | 'female'
  country: string
  education: string
  skills: string[]
}

type PersonNames = Extract<keyof Person, 'firstName' | 'lastName' | 'fullName'>

type T001 = NonNullable<string | number | undefined>
type T002 = NonNullable<string[] | null | undefined>
