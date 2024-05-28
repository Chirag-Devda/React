import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removetodo } from "../Features/Todo/todoSlice";

const Todo = () => {
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
