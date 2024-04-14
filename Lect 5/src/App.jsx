import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import UserBox from "./components/UserBox";
import { countercontext, userarr } from "./Context/Context";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [count, setCount] = useState(0);
  const [form, setform] = useState("");
  const [userdata, setuserdata] = useState([]);

  const handlechange = (e) => {
    setform(e.target.value);
  };

  const handleadd = () => {
    setuserdata([...userdata, { id: uuidv4(), User: form }]);
    setform("");
  };

  return (
    <>
      <countercontext.Provider value={{ count, setCount }}>
        <userarr.Provider value={userdata}>
          <input type="text" value={form} onChange={handlechange} />
          <button onClick={handleadd}>Add</button>
          <UserBox />
          <Navbar />
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
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </userarr.Provider>
      </countercontext.Provider>
    </>
  );
}

export default App;
