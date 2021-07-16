import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Modal } from "react-bootstrap";

import { API, setAuthToken } from "../config/api";

import ModalSignUp from "../component/signupModal";

const SigninModal = (props) => {
  const { handleClose, show, handleSignIn, load } = props;
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
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
    setIsLoading(true);
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const response = await API.post("/signin", data, config);
      console.log(response);
      setAuthToken(response.data.data.token);
      localStorage.setItem("token", response.data.data.token);
      setIsLoading(false);
      handleSignIn({
        type: "LOGIN",
        payload: response.data.data,
      });
    } catch (err) {
      console.log("aku error", err.response.data.message);
      console.log("Aku error sign in", err.response.data);
      setIsError(true);
      setError(err.response.data.message);
      setIsLoading(false);
      setTimeout(() => {
        setIsError(false);
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="modal" id="signinmodal">
      <Modal
        className="modal-dialog modal-dialog-centered"
        show={show}
        onHide={handleClose}
        handleSignIn={handleSignIn}
      >
        <h2 className="title-Sign mx-auto">Sign In</h2>
        <div className="p-10 formCustom">
          {isError && (
            <div className="alert alert-danger mt-2 " role="alert">
              {error && <p>{error}</p>}
            </div>
          )}
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
            <Button
              variant="primary"
              load={isLoading}
              type="submit"
              className="submitBtn mb-10"
            >
              {load ? "...loading" : "Sign In"}
            </Button>
          </Form>
          <p className="customP">
            Don't have an account?
            <Link onClick={() => setShowSignUp(true)}> klik Here</Link>
          </p>
        </div>
      </Modal>
      <ModalSignUp
        showSignUp={showSignUp}
        handleClose={() => setShowSignUp(false)}
      />
    </div>
  );
};

export default SigninModal;
