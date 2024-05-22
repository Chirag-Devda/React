import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "1", text: "Eat" }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addtodo, removetodo } = todoSlice.actions; // export individual functionality to access in components

export default todoSlice.reducer; // export all the reducers to store
