import "./App.css";

import TodoItem from "./components/TodoItem";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: "mai vinh lam", isComplete: false },
        { title: "mai vinh lam 1", isComplete: true },
        { title: "mai vinh lam 2", isComplete: false },
        { title: "mai vinh lam 3", isComplete: false },
      ],
    };
  }

  onItemClick(item) {
    return() => {

      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      let index = todoItems.indexOf(item)
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index+1)
        ]
      })
    }
  }

  render() {
    const {todoItems} = this.state
    return (
      <div className="App">
        {todoItems.length > 0 &&
          todoItems.map((item, index) => (
            <TodoItem
              item={item}
              key={index}
              onClick={this.onItemClick(item)}
            />
          ))}
        {todoItems.length === 0 && "Nothing here"}
      </div>
    );
  }
}

export default App;
