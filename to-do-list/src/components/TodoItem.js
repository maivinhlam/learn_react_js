import React, { Component } from "react";
import "./TodoItem.css";
import classNames from "classnames";
import checkImg from "../img/check.png";
import checkCompleteImg from "../img/checkComplete.png";
class ToDoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    let url = checkImg;
    if (item.isComplete) {
      url = checkCompleteImg;
    }
    return (
      <div
        className={classNames("TodoItem", {
          "TodoItem-complete": item.isComplete,
        })}
        onClick={onClick}
      >
		<img src={url} alt="check" width={32} height={32}/>
        <p>{item.title}</p>
      </div>
    );
  }
}

export default ToDoItem;
