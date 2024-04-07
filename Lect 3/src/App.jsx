import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [form, setform] = useState([{ email: "", phone: "", address: "" }]);
  const handleclick = (e) => {
    confirm("Your clicked sucessfully done");
  };
  const handleinputs = (e) => {
    // setform(e.target.value);
    setform({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  return (
    <>
      <button onClick={handleclick}>Click</button>
      <input
        type="text"
        name="email"
        value={form.email ? form.email : ""}
        onChange={handleinputs}
      />
      <input
        type="text"
        name="phone"
        value={form.phone ? form.phone : ""}
        onChange={handleinputs}
      />
      <input
        type="text"
        name="address"
        value={form.address ? form.address : ""}
        onChange={handleinputs}
      />
    </>
  );
}

export default App;
