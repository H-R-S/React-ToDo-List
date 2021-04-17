import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "30px auto"
  }
  return (
    <div className="container sm-3" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0 ? "There is no Todo List available here." : 
      props.todos.map((todo) => {
        return <> <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/> </>;
      })
      }
    </div>
  );
};