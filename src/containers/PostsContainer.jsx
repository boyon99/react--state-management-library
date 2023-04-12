import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../modules/posts";
import Posts from "../components/Posts";

const PostsContainer = () => {
  const { data: posts, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loading) return <>loading</>;
  if (error) return <>error</>;
  return <>{posts && <Posts posts={posts} />}</>;
};

export default PostsContainer;
