import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsBoxArrowRight } from "react-icons/bs";
import { logout } from "../api/user";

const Header = ({ logged }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Gerenciador de Tarefas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {logged && <Nav.Link href="/tasks">Tarefas</Nav.Link>}
          </Nav>
          <Nav>
            {logged ? (
              <>
                <Nav.Link
                  onClick={handleLogout}
                  className="d-flex align-items-center gap-2"
                >
                  <BsBoxArrowRight size={20} /> Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
