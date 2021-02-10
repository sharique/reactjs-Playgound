import React, { Component, useState } from "react";
import './todo.css'
import TodoForm from "./TodoForm";
import TodoTask from "./TodoTask";

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: 'Hello' },
        { text: 'two'}
      ]
    };
  }

  render() {
    return (
      <div className="list-container grid-y">
        <div> Hello</div>
        <TodoForm  className="cell"/>
        { this.state.todos.map(todo => <TodoTask todo={todo} />)}
      </div>
    );
  }
}

export default TodoList;
