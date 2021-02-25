import React from "react";
import { Link } from "react-router-dom";

const Todo = ({ todos }) => {
  console.log("singl todo", todos);
  return (
    <div>
      {todos &&
        todos.map((e) => (
          <div>
            <h1>
              <Link to={`/${e.id}`}>{e.heading}</Link>
            </h1>
          </div>
        ))}
    </div>
  );
};

export default Todo;
