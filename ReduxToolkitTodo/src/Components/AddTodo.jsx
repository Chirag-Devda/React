import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../Features/Todo/todoSlice";

const AddTodo = () => {
  const [Input, setInput] = useState("");
  const dispatch = useDispatch();

  const addhandler = (e) => {
    e.preventDefault();
    dispatch(addtodo(Input));
    setInput("");
  };

  return (
    <form onSubmit={addhandler} className="w-full max-w-sm">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Jane Doe"
          aria-label="Full name"
          value={Input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button
          className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
          type="button"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
