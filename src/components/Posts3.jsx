// RTK Query
import React, { useState } from "react";
import {
  useGetPostsQuery,
  useGetPostQuery,
  useCreatePostMutation,
} from "../apis/post";

const Posts3 = () => {
  // 모든 항목 보기
  const { data: posts, isLoading, isError } = useGetPostsQuery();
  // 하나의 항목만 보기
  // const { data: post, isLoading, isError } = useGetPostQuery(5);
  // 글 생성하기
  const [createPost] = useCreatePostMutation();

  if (isLoading) return <>로딩중</>;

  return (
    <div>
      <button onClick={() => createPost({ title: "add", body: "내용추가..." })}>
        글쓰기
      </button>
      <h1>Post3</h1>
      {/* <p>{post.title}</p> */}
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default Posts3;
