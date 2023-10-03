interface User {
  readonly email: string
}

interface User {
  password: string
  isOnline?: boolean
}

// const user: User = { ---- error
//   email: 'some@smsm',
// }

// user.email = 'smsjsj' ---- error

interface Window {
  isAuth?: boolean
}

window.isAuth = true
// window.isAdmin = false ---- error

interface Person {
  readonly name: string
  readonly lastName: string
  phone?: string
  yearOfBirth?: number
}

interface Employee extends User, Person {
  contractStart: Date
  phone: string
}

// const user1: Employee = {} ---- error

// class HardWorker implements Employee {
// contractStart: Date
// phone: number
// email: string
// password: string
// isOnline?: boolean | undefined
// name: string
// lastName: string
// yearOfBirth?: number | undefined
// }
