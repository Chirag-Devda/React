import React from "react";
import Component1 from "./Component1";
import { useContext } from "react";
import { countercontext } from "../Context/Context";

const Button = () => {
  const value = useContext(countercontext);
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}>
        <span>
          <Component1 />
        </span>
        This is Button to Show Count
      </button>
    </div>
  );
};

export default Button;
