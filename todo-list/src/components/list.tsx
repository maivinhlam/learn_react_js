import React from "react";
import "./item";
import Item from "./item";
import { Card, ListGroup } from "react-bootstrap";

function List() {
  return (
    <Card className="p-0">
      <Card.Header as="h5">Todo List</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Item />
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default List;
