## Routing { https://reactrouter.com/en/main/start/overview }

- steps
  Install react router→ tutorials→ npm i react-router-dom
  Create a router use→ const router= createBrowserRouter()
  Add RouterProvider and pass router (I created) props.
  Create some routers inside the router

- Things you need to create a route
  Create a link: So that you can go to this route
  Create a component: to add what you will show/ display once you go to that route
  Route definition: Add route so that the react router knows that the component it needs to display while you are visiting that route.

- Link tag
  When we are going to use React route, for navigation we dont use anchor tag, instead we use <Link/>

- Three ways to Link

```
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
   - 1/  <Link to={`/post/${id}`}>Link: {id}</Link>
   - 2/  <Link to={`/post/${id}`}> <button>Shoe Details1</button>
       </Link>
   - 3/  <button onClick={handleButtonNavigate}>Show Details2 </button>
   </div>
 );};
export default Post;
```
