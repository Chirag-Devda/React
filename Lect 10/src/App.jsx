import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter/counterslice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span> Current value of count is {count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}

export default App;
