import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

export const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPost = posts.map((p) => (
    <div key={p.id}>
      <h1>{p.title}</h1>
      <p>{p.content}</p>
    </div>
  ));

  return <div>{renderedPost}</div>;
};

export default PostsList;
