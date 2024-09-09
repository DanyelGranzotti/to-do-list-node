import React from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center my-5">
      <Card className="p-4" variant="light">
        <Card.Body>
          <h1 className="display-4">Bem-vindo ao Gerenciador de Tarefas</h1>
          <p className="lead">
            Gerencie suas tarefas de forma simples e eficiente.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
