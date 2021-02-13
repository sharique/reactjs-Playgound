import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import TodoList from "./todos/TodoList"
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

import { configureStore } from "./store";
import 'foundation-sites/dist/css/foundation.min.css'
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

const store = configureStore();
const persistor = persistStore(store);

function App(props) {
  return <TodoList name="sharique" />
}

ReactDOM.render(
  <div className="grid-container">
    <Provider store={store} >
      <PersistGate
       loading= { <div>Loading...</div>}
       persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </div>
  ,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
