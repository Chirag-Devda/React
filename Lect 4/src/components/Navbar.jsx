import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink
          to="/"
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/login"
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
        >
          <li>Login</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
