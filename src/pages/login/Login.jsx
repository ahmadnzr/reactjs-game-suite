import "./login.css";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  const err = [];

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    if(username.length < 6 || username.length > 20){
      err.push("username < 6 or > 20")
    }else if(username.split('')){
      
    }
  }
  return (
    <div className="login d-flex align-items-center justify-content-center">
      <div className="form-card d-flex flex-column align-items-center justify-content-around">
        <h2>LOGIN</h2>
        <ul>
          {error.map((err) => (
            <li>{err}</li>
          ))}
        </ul>
        <Form className="d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Input your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Input your password"
              onChange={(e) => setPassword(e.target.value)}
            />
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
