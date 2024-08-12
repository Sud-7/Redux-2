import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/userSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const onSavePostclicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setContent("");
      setTitle("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((u) => (
    <option key={u.id} value={u.id}>
      {u.name}
    </option>
  ));

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
          <label htmlFor="postAuthor">Author:</label>
          <br></br>
          <select
            id="postAuthor"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            <option value=""></option>
            {userOptions}
          </select>
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
          <button disabled={!canSave} onClick={onSavePostclicked} type="button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddPostForm;
