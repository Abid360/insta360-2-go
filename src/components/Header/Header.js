import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className=" sticky top-0 bg-white flex justify-center px-10 py-10">
      <div className="flex gap-4 text-xl ">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/reviews"
        >
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/about"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
