import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, Alert } from "react-bootstrap";
import {auth} from "../firebase";

export const Login = () => {
    const { push } = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
  
      try {
        await auth.signInWithEmailAndPassword(email, password);
        push("/profile");
      } catch (error) {
        setError(error.message);
      }
    };
  

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleEmailChange}
                    value={email}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handlePassChange}
                    value={password}
                />
            </Form.Group>

            {error && <Alert>{error.toString()}</Alert>}

            <Button variant="primary" type="submit">
                Submit
            </Button>
            <hr />
            <p>
                Already have an account? <Link to="/signup">Sign up</Link>
            </p>
        </Form>
    );
};