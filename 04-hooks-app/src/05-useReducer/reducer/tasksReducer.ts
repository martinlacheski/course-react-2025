import { z } from "zod";

// Se define la interface de la tarea
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Se define la interface del estado
interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

// Se define el tipo de acción
export type TaskAction =
  | { type: "add"; payload: string }
  | { type: "delete"; payload: number }
  | { type: "toggle"; payload: number };

// Se define el schema de la tarea
const todoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

// Se define el schema del estado
const taskStateSchema = z.object({
  todos: z.array(todoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

export const getTasksInitialState = (): TaskState => {
  // Se recupera el estado del LocalStorage
  const storedTasks = localStorage.getItem("tasks-state");
  // Si existe se retorna el estado, si no se retorna el estado inicial
  if (!storedTasks) {
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  }

  // Validar mediante Zod
  const result = taskStateSchema.safeParse(JSON.parse(storedTasks));

  // Si hay errores se retorna el estado inicial
  if (result.error) {
    console.error("Error al parsear el estado del LocalStorage:", result.error);
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  }

  // Si es válido se retorna el estado
  return result.data;
};

// Se define el reducer
export const tasksReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    // Agregar tarea
    case "add": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.trim(),
        completed: false,
      };

      const newTodos = [...state.todos, newTodo];

      // Se retorna el nuevo estado (se crea una nueva tarea)
      return {
        ...state,
        todos: newTodos,
        length: newTodos.length,
        completed: newTodos.filter((todo) => todo.completed).length,
        pending: newTodos.filter((todo) => !todo.completed).length,
      };
    }

    // Eliminar tarea
    case "delete": {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);

      // Se retorna el nuevo estado (se elimina la tarea)
      return {
        ...state,
        todos: newTodos,
        length: newTodos.length,
        completed: newTodos.filter((todo) => todo.completed).length,
        pending: newTodos.filter((todo) => !todo.completed).length,
      };
    }

    // Cambiar estado de tarea
    case "toggle": {
      const newTodos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

      // Se retorna el nuevo estado (se cambia el estado de la tarea)
      return {
        ...state,
        todos: newTodos,
        length: newTodos.length,
        completed: newTodos.filter((todo) => todo.completed).length,
        pending: newTodos.filter((todo) => !todo.completed).length,
      };
    }

    // Acción por defecto
    default:
      return state;
  }
};
