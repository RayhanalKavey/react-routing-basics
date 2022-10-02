import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";
const Post = ({ post }) => {
  const { title, id, userId, body } = post;
  const navigate = useNavigate();
  const handleButtonNavigate = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="post">
      <p>{title}</p>
      <p>{body}</p>
      {/* <Link to={`/post/${id}`}>Link: {id}</Link> */}
      {/* <Link to={`/post/${id}`}>
        <button>Shoe Details1</button>
      </Link> */}
      <button onClick={handleButtonNavigate}>Show Details2 </button>
    </div>
  );
};

export default Post;
