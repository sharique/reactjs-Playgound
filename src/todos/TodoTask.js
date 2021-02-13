import React from 'react';

const TodoListItem = ({ todo, onRemovePressed, onComepletedPressed }) => (
    <div className="todo-item-container cell">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
          {todo.isCompleted ? null :
            <button className="button success"
            onClick={() => onComepletedPressed(todo.text)}
            >Mark As Completed</button>
          }
            <button
                onClick={() => onRemovePressed(todo.text)}
                className="button alert">Remove</button>
        </div>
    </div>
);

export default TodoListItem;
