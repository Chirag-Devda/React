import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setshowbtn] = useState(false);
  const [todos, settodos] = useState([
    {
      title: "Hey this is the title 11111111",
      disc: "Hey this is the disc 11111111",
    },
    {
      title: "Hey this is the title 2222222",
      disc: "Hey this is the disc 2222222",
    },
    {
      title: "Hey this is the title 333333",
      disc: "Hey this is the disc 333333",
    },
  ]);

  return (
    <>
      <div
        className=" flex justify-between 
      "
      >
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo size-38 " alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* this terminal operator work both condition */}

      {showbtn ? (
        <button>Showbtn is True</button>
      ) : (
        <button>Showbtn is False</button>
      )}

      {/* this conditionl rendering only work one condition */}

      {/* {showbtn && <button>Showbtn is True</button>}  */}

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {todos.map((todo) => {
        return (
          <div key={todo.title} className="Todo-container border-collapse ">
            <div className="todo-title">{todo.title}</div>
            <div className="todo-title">{todo.disc}</div>
          </div>
        );
      })}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
