import {memo, useState} from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { v4 as uuidv4 } from 'uuid';

import {
  addTodo
} from '../features/todo-list/slice';
import { useAppDispatch } from '../store'

const AddBox = memo(() => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    dispatch(addTodo({id: uuidv4(), isDone: false, value: value}))
    setValue("")
  }
  return (
    <Form className="border-0 p-0">
      <Row>
        <Col sm={8} className="my-1">
          <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control
            id="inlineFormInputName"
            placeholder="What needs to be done ?" 
            onChange={e => setValue(e.target.value)}
            value={value}            
          />
        </Col>
        <Col sm={4} className="my-1 text-center d-grid gap-2">
          <Button variant="info" className="text-light" onClick={handleSubmit}>
            <FontAwesomeIcon icon={faSquarePlus} className="mx-2"/>
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
});

export default AddBox;
