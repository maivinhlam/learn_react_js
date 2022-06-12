import React,{ Component } from "react";

class ToDoItem extends Component {
	render() {
		let title = this.props.title;
		return (
			<div className="ToDoItem">
				<p>{title}</p>				
			</div>
		);
	}
}

export default ToDoItem;
