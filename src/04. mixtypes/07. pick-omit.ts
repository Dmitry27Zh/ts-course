export {}

type PossibleKeys = 'key1' | 'key2' | 'key3'
type Names = Record<string, number>
type Names2 = Record<PossibleKeys, boolean>

const myNames: Names2 = {
  key1: false,
  key2: true,
  key3: true,
}

interface Todo {
  id: string
  title: string
  description: string
  completed: boolean
  createdAt: number
}

type SimpleTodo = Pick<Todo, 'id' | 'title' | 'completed'>

const todo1: SimpleTodo = {
  id: 'sssa',
  title: 'siskks',
  completed: true,
}

type SimpleTodo2 = Omit<Todo, 'description' | 'createdAt'>
