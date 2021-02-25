import React, { Fragment } from "react";

const SingleTodo = ({ todos }) => {
  let path = window.location.pathname;
  path = path.split("/");
  let todo = todos && todos.find((e) => e.id === Number(path[1]));
  return (
    <Fragment>
      {!todo ? (
        <h2 className="text-center pt-5">Todos dose not found</h2>
      ) : (
        <Fragment>
          <h1 className="text-center">{todo && todo.heading}</h1>
          <p className="pt-4">{todo && todo.text}</p>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SingleTodo;
