import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import TodoTask from './TodoTask';
import { removeTodo } from './actions';

const TodoList = ({ todos = [], onRemovePressed }) => (
    <div className="list-wrapper grid-x ">
        <TodoForm className="cell medium-6"/>
        {todos.map(todo => <TodoTask todo={todo} onRemovePressed={onRemovePressed} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
