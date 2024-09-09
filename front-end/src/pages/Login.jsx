import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { login } from "../api/user";

const Login = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await login({ email, password });
    if (response.status === 200) {
      toast.success("Login efetuado com sucesso");
      window.location.href = "/tasks";
    } else {
      toast.error("Erro ao efetuar login");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <Container className="bg-light p-4 d-flex flex-column justify-content-center rounded-3 py-5 w-90">
      <h2 className="text-center mb-5">Login</h2>
      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-between gap-3"
      >
        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-4">
          Entrar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
