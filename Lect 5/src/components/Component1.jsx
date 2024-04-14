import React from "react";
import { useContext } from "react";
import { countercontext } from "../Context/Context";

const Component1 = () => {
  const value = useContext(countercontext);
  return <div>{value.count}</div>;
};

export default Component1;
