import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removetodo, updatetodo } from "../Features/Todo/todoSlice";

const Todo = ({ setInput }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todo</div>
      <div className="todos">
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.text}</p>
            <button
              onClick={() => {
                dispatch(updatetodo(todo.id));
                setInput(todo.text);
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                dispatch(removetodo(todo.id));
              }}
            >
              X
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default Todo;
