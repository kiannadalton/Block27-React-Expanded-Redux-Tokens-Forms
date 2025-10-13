import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_CODE = "2403-ftb-et-web-pt";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}`;

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["puppy"],
  endpoints: (builder) => ({
    getPuppies: builder.query({
      query: () => "/players",
      providesTags: ["puppy"],
    }),
    getPuppy: builder.query({
      query: ({ id }) => `/players/${id}`,
      providesTags: ["puppy"],
    }),
    addPuppy: builder.mutation({
      query: ({ body }) => ({
        url: "/players",
        method: "POST",
        body,
      }),
      invalidatesTags: ["puppy"],
    }),
    deletePuppy: builder.mutation({
      query: ({ id }) => ({
        url: `/players/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["puppy"],
    }),
  }),
});

export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
} = api;
