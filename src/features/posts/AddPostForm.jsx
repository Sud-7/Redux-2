import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onSavePostclicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      setContent("");
      setTitle("");
    }
  };

  return (
    <section>
      <div>
        <h2>Add New post here</h2>
        <form>
          <label htmlFor="postTitle">Post Title:</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            name="postTitle"
            id="postTitle"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br></br>
          <label htmlFor="postContent">Post Content:</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter Content"
            value={content}
            name="postContent"
            id="postContent"
            onChange={(e) => setContent(e.target.value)}
          />
          <br></br>
          <button onClick={onSavePostclicked} type="button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddPostForm;
