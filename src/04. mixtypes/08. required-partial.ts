export interface Todo {
  readonly id: string
  completed: boolean
  title: string
  createdAt?: number
}

type ReadonlyTodo = Readonly<Todo>
type PartialTodo = Partial<Todo>

function updateTodo(todo: Todo, fielsToUpdate: PartialTodo) {
  return { ...todo, ...fielsToUpdate }
}

type RequiredTodo = Required<Todo>
