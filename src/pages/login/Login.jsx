import "./login.css";
import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="login d-flex align-items-center justify-content-center">
      <div className="form-card d-flex flex-column align-items-center justify-content-around">
        <h2>LOGIN</h2>
        <Form className="d-flex flex-column justify-content-center">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Input your username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Input your password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
