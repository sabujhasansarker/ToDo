import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const Home = ({ addTodo }) => {
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [add, setAdd] = useState(false);
  const addSingleTodo = (e) => {
    e.preventDefault();
    if (heading !== "" && text !== "") {
      addTodo({ id: Math.floor(Math.random() * 100), heading, text });
      setText("");
      setHeading("");
      setAdd(true);
      setTimeout(() => {
        setAdd(false);
      }, 2000);
    }
  };
  return (
    <div className="home">
      {add && (
        <Alert variant="success">
          <Alert.Heading as="h5">your Todo Add Now.❤</Alert.Heading>
        </Alert>
      )}
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
