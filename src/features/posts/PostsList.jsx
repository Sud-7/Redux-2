import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButton";

export const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPost = posts.map((post) => (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
      </p>
      <ReactionButtons post={post} />
    </div>
  ));

  return <div>{renderedPost}</div>;
};

export default PostsList;
