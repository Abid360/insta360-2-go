import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className=" sticky top-0 bg-white flex justify-center px-10 py-10">
      <div className="flex gap-4 text-xl">
        <Link to="/">Home</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Header;
