import React from "react";
import "./item";
import Item from "./item";
import { Card, ListGroup } from "react-bootstrap";
import { useAppSelector } from '../store'

const List = React.memo(() => {
  const listTodo = useAppSelector((state) => state.TodoList.TodoList);
  return (
    <Card className="p-0">
      <Card.Header as="h5">Todo List</Card.Header>
      <Card.Body className="p-0">
        <ListGroup variant="flush">
          {listTodo.map((item: any, index: Number) => (
            <ListGroup.Item key={String(index)}>
              <Item todo={item} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
});

export default List;
