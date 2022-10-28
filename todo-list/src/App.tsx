import React from "react";
import "./App.css";

import SearchBox from "./components/search-box";
import List from "./components/list";
import { Row, Container } from "react-bootstrap";
import "./components/fontawesome"

const App: React.FC = () => {
  return (
    <Container className="mt-5">
        <Row className="">
          <SearchBox/>
        </Row>
        <Row className='mt-4'>
          <List/>
        </Row>
    </Container>
  );
};

export default App;
