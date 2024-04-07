import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

const App = (props) => {
  return (
    <div className="container">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};

export default App;
