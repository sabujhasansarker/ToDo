import React from "react";
import { Link } from "react-router-dom";

const SingleTodo = ({ todos }) => {
  let path = window.location.pathname;
  path = path.split("/");
  let todo = todos.find((e) => e.id === Number(path[1]));
  return (
    <div>
      <h1>{todo && todo.heading}</h1>
      <p>{todo && todo.text}</p>
    </div>
  );
};

export default SingleTodo;
