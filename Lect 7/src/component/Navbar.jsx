import React from "react";
import { memo } from "react";

const Navbar = ({ mood, setmood }) => {
  console.log("Navbar re-Render");
  return (
    <div>
      <p>I am a {mood} Navbar</p>
      <button
        onClick={() => {
          setmood();
        }}
      >
        Change
      </button>
    </div>
  );
};

export default memo(Navbar);
