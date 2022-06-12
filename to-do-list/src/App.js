import "./App.css";

import ToDoItem from "./components/ToDoItem";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.todoItems = ["mai vinh lam", "mai vinh lam 1", "mai vinh lam 2"];
  }
  
  render() {
  return (
    <div className="App">
      {
        this.todoItems.map((item, index) => <ToDoItem title={item} key={index}/>)
      }
      {/* <ToDoItem title="Di cho"/> */}
    </div>
  );
    }
}

export default App;
