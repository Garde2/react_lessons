//import logo from './logo.svg';
import "./App.css";

import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import TasksList from "./components/TasksList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TasksList />
      </div>
    </Provider>
  );
}

export default App;
