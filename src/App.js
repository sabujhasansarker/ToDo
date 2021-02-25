import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoNav from "./Components/Layouts/Nav";
import Home from "./Components/Pages/Home";
import Todo from "./Components/Pages/SingleTodo";
import Todos from "./Components/Layouts/Todos";
import { Container } from "react-bootstrap";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (e) => setTodos([...todos, e]);

  return (
    <Router>
      <TodoNav todoLength={todos.length} />
      <Container>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home addTodo={(e) => addTodo(e)} />}
          />
          <Route exact path="/todos" render={() => <Todos todos={todos} />} />
          <Route exact path="/:id" render={() => <Todo todos={todos} />} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
