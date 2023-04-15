import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userCardsApi = createApi({
  reducerPath: 'userCards',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6437ef6ec1565cdd4d61c84f.mockapi.io/follower_users',
  }),
  tagTypes: ['userCards'],

  endpoints: builder => ({
    getUsers: builder.query({
      query: ({ page = 1, limit = 8 }) => `/?page=${page}&limit=${limit}`,
      providesTags: ['userCards'],
    }),

    // invalidatesTags: ['userCards'],

    updateField: builder.mutation({
      query: ({ id, follow, followers }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: {
          follow: follow,
          followers,
        },
      }),
      invalidatesTags: ['userCards'],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateFieldMutation } = userCardsApi;
