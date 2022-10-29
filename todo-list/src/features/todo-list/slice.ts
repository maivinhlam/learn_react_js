import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Todo {
  id: string;
  isDone: boolean;
  value: string;
}

interface initialStateITF {
  TodoList: Todo[];
}

const initialState: initialStateITF = {
  TodoList: <Todo[]>[
    {
      id: uuidv4(),
      isDone: true,
      value: "mai vinh lam",
    },
    {
      id: uuidv4(),
      isDone: false,
      value: "mai vinh lam 2",
    },
  ],
};

export const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.TodoList.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<{ id: String }>) => {
      state.TodoList = state.TodoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const {
        payload: { isDone, id, value },
      } = action;
      state.TodoList = state.TodoList.map((Todo) =>
        Todo.id === id ? { ...Todo, isDone, value } : Todo
      );
    },
  },
});

const { actions, reducer } = todoSlice;

export const { addTodo, deleteTodo, editTodo } = actions;

export const selectTodo = (state: initialStateITF) => state.TodoList;

export default reducer;
