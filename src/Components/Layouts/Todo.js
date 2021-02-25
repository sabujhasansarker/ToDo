import React, { Fragment } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Todo = ({ todo }) => {
  return (
    <Col sm={3}>
      <Card as={Link} to={`/${todo.id}`}>
        <Card.Header className="text-black text-bold">
          <h5>{todo.heading}</h5>
        </Card.Header>
        <Card.Body>
          {todo.text.length > 50 ? (
            <Fragment>{todo.text.slice(0, 50)} ...</Fragment>
          ) : (
            todo.text
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Todo;
