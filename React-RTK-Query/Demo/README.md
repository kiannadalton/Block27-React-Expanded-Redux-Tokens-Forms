# Block 27C: Expanded React II

Guided in-class project for Block 27C: Expanded React II

In this project we will learn about fetching data using RTK Query instead of fetch using a previous project (ToDos)

# Introduction

We are going to build upon our simple To Do Task List we made in Block 25.

We are going to be using a mock Todo List API. The base url for the todos is at `https://todo-api-ur6k.onrender.com/api/todos`

The object of a todo for this API is:

```json
{
  "id": 1,
  "task": "A good to do",
  "completed": false
}
```

When adding a to do using the API only the `task` key is required in our request.

Note the project is the same as the finished code in `block27B_demo` but re-named to `block27C_demo` for clarity

## Steps to complete the project

Complete the following steps using this [RTK Query Overview](https://redux-toolkit.js.org/rtk-query/overview) and these [RTK Query Examples](https://redux-toolkit.js.org/rtk-query/usage/examples).

1. Navigte into the `block27C_demo` folder and run `npm i react-redux @reduxjs/toolkit` in the terminal
2. Create an `api` folder in the `src` folder with a `todoApi.js` file.
3. In the `todoApi.js` file, use `createApi` to create a `todosApi` with 3 endpoints: `getTodos`, `addTodo`, and `updateTodo`
   - the base url will be the same as what we've used in our fetch function within `App.jsx`
4. Export the hooks for each query from the file
5. In the `store.js` file, update the store to use the `todosApi` reducer instead of the reduce from `features/todos/todoSlice`
6. Add the default middleware combined with any middleware from your `todosApi`
7. Since we are using RTK query we can call the endpoint directly in the `TaskList` component and no longer need the fetch within `App.jsx`
   - remove the `useEffect` containing the `fetch`
   - remove any un-needed imports
8. Import `useGetTodosQuery` and `useUpdateTodoMutation` into `TaskList.jsx`
   - call `useGetTodosQuery` making sure to destructure the keys `data`, `loading` and `error` from the call
   - comment out the `completeTask` function for now
   - show a message of `Loading tasks...` when loading is true
   - show an error message to the user if there's an error from our query
   - update the return statement of our component to use the `data` returned from the query instead of the previous variable of `tasks`
9. Call `useUpdateTodoMutation` below our `useGetTodosQuery`
   - pulling out the name of the endpoint within an array
10. Uncomment out `completeTask` and call `updateTodo` instead of dispatching the update
    - you may want to use a different array method from map in this situation
    - remove any un-needed imports
11. Import `useAddTodoMutation` into `AddTodo.jsx`
12. Call `useUpdateTuseAddTodoMutationodoMutation`
    - pulling out the name of the endpoint within an array
13. Update the `handleSubmit` to use the `addTodo` instead of fetch
    - remove any un-needed imports
14. Remove the no longer needed `features` folder
