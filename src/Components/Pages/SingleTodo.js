import React, { Fragment } from "react";

const SingleTodo = ({ todos }) => {
  let path = window.location.pathname;
  path = path.split("/");
  let todo = todos.find((e) => e.id === Number(path[1]));
  return (
    <Fragment>
      <h1 className="text-center">{todo.heading}</h1>
      <p className="pt-4">{todo.text}</p>
    </Fragment>
  );
};

export default SingleTodo;
