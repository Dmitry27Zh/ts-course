const numbers = [1, 2, 3, '', true] // ---- (string | number | boolean)[]

const random = [] // ---- any[]
random.push(22)
random.push('11') // ---- no error

const strings: string[] = []
// strings.push(1) ---- error

// alternate syntax
const alternateStrings: Array<string> = []
// alternateStrings.push(2) ---- error

export interface Car {
  wheels: number
  brand: string
  type: string
}

const myCar: Car = {
  wheels: 4,
  brand: 'BMW',
  type: 'sedan',
}

const cars: Car[] = []
// cars.push({ sound: 'whwhwhwh' }) ------ error
cars.push(myCar) // ---- no error

const arrOfArr: string[][] = []
// arrOfArr.push('') ---- error
// arrOfArr.push([2]) ---- error
arrOfArr.push(['']) // ---- no error

function printArr(arr: unknown[]): void {
  arr.forEach((item, index, array) => {
    console.log('built in method auto types')
  })
}
