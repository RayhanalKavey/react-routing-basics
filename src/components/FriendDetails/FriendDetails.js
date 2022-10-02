import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  const { name, id, username, email, phone, website } = friend;
  // console.log(friend);
  return (
    <div style={{ backgroundColor: "lightblue", border: "2px solid black" }}>
      <h1>{name}'s Details page</h1>
      <h3>Everything you need to know about this person.</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
    </div>
  );
};

export default FriendDetails;
