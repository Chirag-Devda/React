import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [mood, setmood] = useState("Good");

  // This is normal Function which will change when app.jsx re-render
  // const changemood = () => {
  //   return setmood("Excellent");
  // };

  // This is Callback Function which will change when their dependence changes
  // const changemood = useCallback(() => {
  //   return setmood("Excellent");
  // }, []);

  // Dependece Count Changes
  // const changemood = useCallback(() => {
  //   return setmood("Excellent" + count);
  // }, [count]);

  return (
    <>
      <Navbar mood={mood} setmood={changemood} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            changemood();
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
