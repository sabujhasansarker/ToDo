import React from "react";
import { Container } from "react-bootstrap";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <Container>
      <h1 className="text-center">Todo List</h1>
    </Container>
  );
};

export default Todos;
