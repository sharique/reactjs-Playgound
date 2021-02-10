import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import TodoList from "./todos/TodoList"
import 'foundation-sites/dist/css/foundation.min.css'
import './index.css';

function App(props) {
  return <TodoList name="sharique" />
}

ReactDOM.render(
  <React.StrictMode>
    <div className="grid-container">
    <App /></div>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
