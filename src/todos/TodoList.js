import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import TodoTask from './TodoTask';
import { removeTodo, markCompleted } from './actions';
import "./todo.css";
const TodoList = ({ todos = [], onRemovePressed, onComepletedPressed }) => (
  <div className="list-wrapper grid-x ">
    <h3> Todo list App</h3>
    <div className="cell">
      <TodoForm />
      {todos.map(todo => <TodoTask todo={todo} onRemovePressed={onRemovePressed}
      onComepletedPressed={onComepletedPressed}
      />)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onComepletedPressed: text => dispatch(markCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
