import React from "react";
import { Nav } from "./Navbar.style";
const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Chirag Classes</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </Nav>
  );
};

export default Navbar;
