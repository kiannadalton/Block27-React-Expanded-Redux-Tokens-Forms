# Block 27B: Expanded React I

Guided in-class project for Block 27B: Expanded React I

In this project we will learn about Redux Toolkit using a previous project (ToDos)

# Introduction

We are going to build upon our To Do Task List from block 27.

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

Note the project is the same as the finished code in `block27_demo` but re-named to `block27B_demo` for clarity

## Steps to complete the project

Make sure to run the following in the project terminal before starting

```bash
    cd block27B_demo
    npm i
    npm run dev
```

Search for "👉 STEP " within the project

Files that the steps should be found in:

`main.jsx`

1. Import `Provider` from `react-redux`
2. Import store from the `store.js` file
3. Wrap the App with the Provider setting the imported store as the store prop

`store.js`

4. Import `configureStore` from `@reduxjs/toolkit`
5. Create a reducer called `todos` that uses the `todoReducer` we imported

`/features/todos/todoSlice.js`

6. Import `createSlice` from `@reduxjs/toolkit`
7. Set the initial state of `tasks` to an empty array
8. Update `addTodo` so that it adds the todo passed in `action.payload` to the state

`App.jsx`

9. Import `useDispatch` from `react-redux`
10. Create a `dispatch` using `useDispatch`
11. Dispatch `setTodos` with the json response

`/components/TaskList.jsx`

12. Dispatch `setTodos` with the updated Tasks

`/components/AddTodo.jsx`

13. Create a `dispatch` using `useDispatch`
14. Dispatch `addTodo` with json response
