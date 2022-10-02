import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header-links">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          to="/about"
        >
          About{" "}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          to="/posts"
        >
          Posts
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          to="/friends"
        >
          Friends
        </NavLink>
      </nav>
      <h1>Common part</h1>
    </div>
  );
};

export default Header;
