import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";
function App() {
  const [Input, setInput] = useState("");

  return (
    <>
      <AddTodo Input={Input} setInput={setInput} />
      <Todo Input={Input} setInput={setInput} />
    </>
  );
}

export default App;
