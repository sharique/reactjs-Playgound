import React, { Component, useState } from "react";

class TodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValuecount: ''
    };
  }


  render() {
    return (
      <div className="new-todo-form cell">
        <input
          className="new-todo-input"
          type="text"
          placeholder="Type your new todo here"
          value={ this.state.inputValue}
          onChange={e => setInputValue(e.target.value)} />
        <button className="new-todo-button button">Create Todo</button>
      </div>
    );

    function setInputValue(){

    }
  }
}

export default TodoForm;
