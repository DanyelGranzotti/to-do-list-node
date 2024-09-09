import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light mt-4">
      <Container>
        <Row className="py-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Gerenciador de Tarefas</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
