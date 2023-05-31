import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AppRoutes from "./routes"

const App = () => (
  <Container >
      <Row className="justify-content-center justify-content-md-center justify-content-sm-center justify-content-lg-center">
        <Col lg="6" sm="7" md="6" xs="8">
          <AppRoutes />
        </Col>
      </Row>
    </Container>
)

export default App;
