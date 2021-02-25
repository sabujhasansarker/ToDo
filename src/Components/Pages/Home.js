import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ addTodo }) => {
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const addSingleTodo = (e) => {
    e.preventDefault();
    if (heading !== "" && text !== "") {
      addTodo({ id: Math.floor(Math.random() * 100), heading, text });
      setText("");
      setHeading("");
    }
  };
  return (
    <div className="home">
      <h1 className="text-center">Add Todo</h1>
      <form onSubmit={(e) => addSingleTodo(e)}>
        <input
          type="text"
          placeholder="Heading"
          name="heading"
          onChange={(e) => setHeading(e.target.value)}
          value={heading}
        />
        <textarea
          name="text"
          placeholder="Text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
};

export default Home;
