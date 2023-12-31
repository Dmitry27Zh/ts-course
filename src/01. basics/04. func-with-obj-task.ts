interface User {
  login: string
  email: string
  password: string
  isOnline: boolean
  lastVisited: Date
}

interface Admin extends User {
  role: 'admin'
}

export function login(user: { login: string; password: string }): void {
  if (user.login.length > 0 && user.password.length > 0) {
    console.log('Hello', user.login)
  }
}

const user1: User = {
  login: 'user123',
  email: 'asdf@jdj.org',
  password: '123456',
  isOnline: false,
  lastVisited: new Date(2023, 8, 30),
}

const user2: Admin = {
  login: 'admin000',
  email: 'jsjsjs@sjjss.sjh',
  password: '676767',
  isOnline: true,
  lastVisited: new Date(),
  role: 'admin',
}

login(user1)
login(user2)
