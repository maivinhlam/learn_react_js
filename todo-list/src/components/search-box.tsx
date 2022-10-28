import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

function SearchBox() {
  return (
    <Form className="border-0 p-0">
      <Row>
        <Col sm={8} className="my-1">
          <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control
            id="inlineFormInputName"
            placeholder="What needs to be done?"
          />
        </Col>
        <Col sm={4} className="my-1 text-center d-grid gap-2">
          <Button type="submit" variant="info" className="text-light">
            <FontAwesomeIcon icon={faSquarePlus} className="mx-2"/>
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBox;
