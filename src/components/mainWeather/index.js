import React from "react";
import Cityweather from "./header/index";
import Resweather from "./main/index";
import { Container, Row, Col } from "react-bootstrap/";

function Mainweather() {
  return (
    <Container>
      <Row>
        <Col>
          <Cityweather />
          <Resweather />
        </Col>
      </Row>
    </Container>
  );
}

export default Mainweather;
