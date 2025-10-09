# Block 27C - Expanded React II Guided Practice

RTK Query

1. Write the command to import `createApi` and `fetchBaseQuery` from the library `@reduxjs/toolkit/query/react`.

<details>
<summary>Show Answer</summary>

[Docs](https://redux-toolkit.js.org/rtk-query/overview#create-an-api-slice)

```js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
```

</details>

2. Write a command to create an instance named `api` using the `createApi` method. Inside the `createApi` method, utilize the `reducerPath` method and assign the string value `api` as the name.

<details>
<summary>Show Answer</summary>

[Docs](<https://redux-toolkit.js.org/rtk-query/overview#create-an-api-slice:~:text=export%20const%20pokemonApi%20%3D%20createApi(%7B)>)

```js
import { createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
});
```

</details>

3. In the above command, add a `baseQuery` function that all endpoints will use as the base of their request. `baseQuery` uses `fetchBaseQuery` to fetch the query with `baseUrl: 'https://www.example.com'`

<details>
<summary>Show Answer</summary>

[Docs](https://redux-toolkit.js.org/rtk-query/overview#create-an-api-slice:~:text=%27pokemonApi%27%2C-,baseQuery,-%3A%20fetchBaseQuery)

```js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.example.com" }),
});
```

</details>

4. Define endpoints for the API service using `builder`. Inside it, define an endpoint that fetches `query: () => 'players'`,

<details>
<summary>Show Answer</summary>

[Docs](https://redux-toolkit.js.org/rtk-query/overview#create-an-api-slice:~:text=%27pokemonApi%27%2C-,baseQuery,-%3A%20fetchBaseQuery)

```js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.example.com'}),
    endpoints: (builder) => ({
        getPlayers: builder.query({
            query: () => 'players'
        })
    })
})
</details>
```
