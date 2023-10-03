type Status = 'ok' | 'loading' | 'error'

const st: Status = 'error'
// const st2: Status = 'errors' // ---- error

function prindID(id: number | string): void {
  // console.log(id.toUpperCase()) ---- error

  if (typeof id === 'string') {
    console.log(id.toUpperCase()) // ---- no error
  } else {
    console.log(id)
  }
}

function welcome(person: [string, string] | string): number | string {
  if (Array.isArray(person)) {
    console.log('Hello', person.join(' '))

    return 2
  } else {
    console.log('Hello', person)

    return 'sss'
  }
}
