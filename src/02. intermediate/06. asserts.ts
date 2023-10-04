export type User = {
  name: string
  displayName: string | null
}

function assertDisplayName(user: User) {
  if (!user.displayName) {
    throw new Error('User has no display name')
  }
}

function assertDisplayName2(user: User): asserts user is User & { displayName: string } {
  if (!user.displayName) {
    throw new Error('User has no display name')
  }
}

function logUserByDisplayName(user: User) {
  assertDisplayName(user)
  // console.log(user.displayName.toUpperCase()) // ---- error
  assertDisplayName2(user)
  console.log(user.displayName.toUpperCase()) // ---- no error
}
