import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";
const Friend = ({ friend }) => {
  const { name, id, username, email } = friend;
  return (
    <div className="friend">
      <h3>Name: {name}</h3>

      <p>
        <small>
          User Name:{" "}
          <Link to={`/friend/${id}`}>
            <button>{username}</button>
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Friend;
