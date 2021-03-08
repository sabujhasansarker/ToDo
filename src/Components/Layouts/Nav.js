import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Container, Badge } from "react-bootstrap";

const TodoNav = ({ todoLength }) => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="text-white">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoG6tfQA2ZpPPeYhFg8p4GJlb0AiLMtDe43A&usqp=CAU"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Todo List
            </Link>
          </Navbar.Brand>
          <Nav className="ml-auto text-white">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="todos">
              Todos
              <Badge variant="light ml-1 ">{todoLength}</Badge>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default TodoNav;
