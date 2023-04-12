import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'post',
  // 요청에 필요한 기본값
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_URL,
  }),
  // refetchOnFocus:true, // 화면 포커스 시 자동으로 요청 여부
  endpoints: (builder) => ({
    getPosts: builder.query({ // builder.query -> get 요청
      query: () => 'posts', // VITE_SERVER_URL/posts
      keepUnusedDataFor: 60 // 캐시 데이터 보관 시간
    }),
    getPost: builder.query({
      query: (postId) => `posts/${postId}`
    }), // useGetPostQuery(postId)
    createPost: builder.mutation({ // mutation -> get 이외 모든 요청
      query: (data) => ({
        url: 'posts',
        method: 'POST',
        body: data
      })
    }),
  })
})

export const { useGetPostsQuery, useGetPostQuery, useCreatePostMutation } = postApi
