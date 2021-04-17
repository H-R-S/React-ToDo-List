import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import { AddTodo } from "./components/AddTodo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from './components/About';
import "./App.css";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("Deleted", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("Adding a Todo");

    let sno;

    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);

    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todo List" searchBar={false} />
        <Switch>
          <Route exact path="/" render = {() => {
            return (<><AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} /> </>)}
          }>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
