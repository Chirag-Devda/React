import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import "./cards.css";
const cards = () => {
  const [fetched, setfetched] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      let res = await data.json();
      setfetched(res);
    };
    fetching();
  });
  return (
    <div className="card-container">
      {fetched.map((data) => {
        return (
          <div key={data.title} className="cards">
            <img
              className="poster"
              src="              https://th.bing.com/th/id/OIP.g7vToxOAkz-rfjtpHwgApgHaE5?rs=1&pid=ImgDetMain
"
            ></img>
            <div className="id">{data.id}</div>
            <div className="id">{data.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default cards;
