import "./App.css";

import TodoItem from "./components/TodoItem";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: "mai vinh lam", isComplete: false },
      { title: "mai vinh lam 1", isComplete: true },
      { title: "mai vinh lam 2", isComplete: false },
      { title: "mai vinh lam 3", isComplete: false },
    ];
  }

  render() {
    return (
      <div className="App">
        {this.todoItems.length > 0 && this.todoItems.map((item, index) => (
          <TodoItem item={item} key={index} />
        ))}
        {this.todoItems.length === 0 && "Nothing here"}
      </div>
    );
  }
}

export default App;
