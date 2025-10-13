import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gpApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.example.com",
  }),
  endpoints: (builder) => ({
    fetchPlayers: builder.query({
      query: () => "players",
    }),
  }),
});

export const { useFetchPlayersQuery } = gpApi;
