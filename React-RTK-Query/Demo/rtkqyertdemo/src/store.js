import { configureStore } from "@reduxjs/toolkit";
// nolonger need todoReducer since RTK Query takes care of the reducer aspect for us.
// import todoReducer from "./features/todos/todoSlice";
import { todoApi } from "./api/todoApi";

const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },
  // adds middleware from API to the store's middleware
  middleware: (geDefaultMiddleware) =>
    geDefaultMiddleware().concat(todoApi.middleware),
});

export default store;
