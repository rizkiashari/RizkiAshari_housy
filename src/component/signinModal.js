import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Modal } from "react-bootstrap";

import { API, setAuthToken } from "../config/api";
const SigninModal = (props) => {
  const { handleClose, show, handleSignIn } = props;
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      "Content-Type": "application/json",
    };

    const response = await API.post("/signin", data, config);
    console.log(response);
    setAuthToken(response.data.data.token);
    handleSignIn({
      type: "LOGIN",
      payload: response.data.data,
    });
  };

  return (
    <Modal show={show} onHide={handleClose} handleSignIn={handleSignIn}>
      <h2 className="title-Sign mx-auto">Sign In</h2>
      <div className="p-10 formCustom">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={handleChange}
              value={data.username}
              placeholder="Enter Username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="submitBtn mb-10">
            Sign In
          </Button>
        </Form>
        <p className="customP">
          Don't have an account? <Link to="/signup">klik Here</Link>
        </p>
      </div>
    </Modal>
  );
};

export default SigninModal;
