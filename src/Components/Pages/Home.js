import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

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
      <Form onSubmit={(e) => addSingleTodo(e)}>
        <Form.Group>
          <Form.Label>Heading</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inter Your Todo Heading"
            name="heading"
            onChange={(e) => setHeading(e.target.value)}
            value={heading}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Text</Form.Label>
          <Form.Control
            name="text"
            placeholder="Inter Your Todo Text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            as="textarea"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Todo
        </Button>
      </Form>
    </div>
  );
};

export default Home;
