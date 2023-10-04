let word: string | null = null
export const num = 10

if (num > 5) {
  word = 'abc'
}

// console.log(word.toUpperCase()) ---- error
console.log((word as string).toUpperCase())
console.log(word!.toUpperCase())

function printName(name?: string) {
  // const fullName: string = name ---- error
  const fullName: string = name!
}

export interface Person {
  name: string
  age: number
  sex: 'male' | 'female'
}

function printName2(person?: Person) {
  console.log(person!.name)
}

const people: Person[] = [
  {
    name: 'Josh',
    age: 30,
    sex: 'male',
  },
  {
    name: 'Maria',
    age: 30,
    sex: 'female',
  },
]

const femalePerson = people.find((person) => person.sex === 'female') // Person | undefined
const malePerson = people.find((person) => person.sex === 'male')! // Person
