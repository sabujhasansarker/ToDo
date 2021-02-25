import React from "react";
import { Container, Row } from "react-bootstrap";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <Container>
      <h1 className="text-center">Todo List</h1>
      {todos.length !== 0 ? (
        <Row>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </Row>
      ) : (
        <h4 className="text-center pt-4">No more todos ...</h4>
      )}
    </Container>
  );
};

export default Todos;
