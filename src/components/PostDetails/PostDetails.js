import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./PostDetails.css";
const PostDetails = () => {
  const postClicked = useLoaderData();
  const { title, id, userId, body } = postClicked;
  const navigate = useNavigate();
  const findAuthor = () => {
    navigate(`/friend/${userId}`);
  };
  // console.log(postClicked);
  return (
    <div className="clicked-post">
      <h1>Details of '{title}'</h1>
      <p>ID: {id}</p>
      <p>userId: {userId}</p>
      <p>Body: {body}</p>
      <button onClick={findAuthor}>Get the author</button>
    </div>
  );
};

export default PostDetails;
