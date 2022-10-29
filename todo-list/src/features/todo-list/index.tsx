import AddBox from "../../components/add-box";
import List from "../../components/list";
import { Row, Container } from "react-bootstrap";

export default function TodoList() {
  return (
    <Container className="mt-5">
      <Row>
        <AddBox/>
      </Row>
      <Row className="mt-4">
        <List/>
      </Row>
    </Container>
  );
}
