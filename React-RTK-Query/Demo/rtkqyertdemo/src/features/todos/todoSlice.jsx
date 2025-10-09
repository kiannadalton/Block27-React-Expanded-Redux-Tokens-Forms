import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push(action.payload);
    },
    setTodos: (state, { payload }) => {
      state.tasks = payload;
    },
  },
});

export const { addTodo, setTodos } = todoSlice.actions;

export const getTasks = (state) => state.todos.tasks;

export default todoSlice.reducer;
