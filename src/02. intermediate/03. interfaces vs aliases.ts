// Create two variants: aliases and interfaces
// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product,+Vehicle

type Product = {
  price: number
  isNew: boolean
  isSale: boolean
  title: string
}

type Vehicle = {
  wheels: number
  year: number
  brand: string
}

export type Car = {
  type: string
  model: string
} & Product &
  Vehicle

const car: Car = {
  price: 100000,
  isNew: true,
  model: 'Accord',
  title: 'Modern car',
  isSale: false,
  wheels: 4,
  brand: 'Honda',
  type: 'sedan',
  year: 2023,
}

interface IProduct {
  price: number
  isNew: boolean
  isSale: boolean
  title: string
}

interface IVehicle {
  wheels: number
  year: number
  brand: string
}

interface ICar extends IProduct, IVehicle {
  type: string
  model: string
}

const iCar: ICar = {
  price: 200000,
  isNew: true,
  model: 'Escalade',
  title: 'Modern car',
  isSale: false,
  wheels: 4,
  brand: 'Cadilac',
  type: 'suv',
  year: 2023,
}
