// 👉 STEP 4: Import configureStore from @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todos/todoSlice";

//configureStore is a callback function
const store = configureStore({
  // 👉 STEP 5: create a reducer called todos (Key) that uses the todoReduce (Value) we imported
  reducer: {
    todos: todoReducer,
  }

});

export default store;
