import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getService: builder.query({
      query: () => "data.json",
      transformResponse: (response) => response.service,
    }),
    getProduct: builder.query({
      query: () => "data.json",
      transformResponse: (response) => response.product,
    }),
  }),
});

export const { useGetServiceQuery, useGetProductQuery } = api;
