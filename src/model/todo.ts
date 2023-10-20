interface Todo {
    id: string,
    content: string,
    hasBeenDone: boolean,
    createdAt: string,
}

interface CreateTodoRequest {
    content: string,
}

interface UpdateTodoRequest {
    content?: string
    hasBeenDone?: boolean,
}

interface ListTodosResponse {
    items: Array<Todo>,
}

interface ListTodoRequest {
    hasBeenDone: boolean,
}

export {Todo, CreateTodoRequest, UpdateTodoRequest, ListTodoRequest, ListTodosResponse};