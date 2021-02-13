import React from 'react';

const TodoListItem = ({ todo, onRemovePressed }) => (
    <div className="todo-item-container cell">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            <button className="button success">Mark As Completed</button>
            <button
                onClick={() => onRemovePressed(todo.text)}
                className="button alert">Remove</button>
        </div>
    </div>
);

export default TodoListItem;
