import React, { Component,useState } from "react";
import './todo.css'

class TodoTask extends Component {

  render() {
    return (
      <div className="todo-item-container cell">
        <h3> {this.props.todo.text}</h3>
        <div className="buttons-container">
          <button className="completed-button button success">Mark As Completed</button>
          <button className="remove-buttom button alert">Remove</button>
        </div>
      </div>
    );
  }
}

export default TodoTask;
