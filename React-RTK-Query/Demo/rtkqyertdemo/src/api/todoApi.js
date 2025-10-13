import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addTodo } from "../features/todos/todoSlice";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todo-api-ur6k.onrender.com/api/todos",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/",
    }),
    addTodo: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
    }),
    updateTodo: builder.mutation({
      // you can only pass one thing. If you're passing more than one thing, you need to put it in curly braces so it's sending one object.
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const { useAddTodoMutation, useGetTodosQuery, useUpdateTodoMutation } = todoApi;
