import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userCardsApi = createApi({
  reducerPath: 'userCards',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6437ef6ec1565cdd4d61c84f.mockapi.io',

    tagTypes: ['userCards'],
  }),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => `/follower_users`,
    }),

    invalidatesTags: [{ type: 'userCards', id: 'LIST' }],
  }),
});

export const { useGetUsersQuery } = userCardsApi;