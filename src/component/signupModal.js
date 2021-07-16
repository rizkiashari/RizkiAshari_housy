import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Modal } from "react-bootstrap";
import { API } from "../config/api";

const SignupModal = (props) => {
  const { handleClose, showSignUp } = props;
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    listAsId: "",
    address: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  console.log("Aku Data Sign: ", data);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const response = await API.post("/signup", data, config);
      console.log("Aku Respon: ", response);
      localStorage.setItem("token", response.data.token);
      // localStorage.setItem("Response", response);
      return response.data.data;
    } catch (err) {
      // console.log("Aku error sign up", err.response.data);
      // console.log("aku error", err.response.data.message);
      setIsError(true);
      setError(err.response.data.message);
      setTimeout(() => {
        setIsError(false);
        setError("");
      }, 5000);
    }
  };
  return (
    <Modal show={showSignUp} onHide={handleClose} className="signUpStyle">
      <h2 className="title-Sign mx-auto">Sign Up</h2>

      <div className="p-10 formCustom">
        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3" controlId="formBasicFullname">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              required
              name="fullName"
              onChange={handleChange}
              value={data.fullName}
              placeholder="Enter Fullname"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              required
              name="username"
              onChange={handleChange}
              value={data.username}
              placeholder="Enter Username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              name="email"
              onChange={handleChange}
              value={data.email}
              placeholder="Enter Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              required
              onChange={handleChange}
              value={data.password}
              placeholder="Enter Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputListAs">
            <Form.Label>List As</Form.Label>
            <select
              className="form-control"
              name="listAsId"
              onChange={handleChange}
            >
              <option value="">Choose List As</option>
              <option value="1">Owner</option>
              <option value="2">Tenant</option>
            </select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicGender">
            <Form.Label>Gender</Form.Label>
            <select
              className="form-control"
              name="gender"
              onChange={handleChange}
            >
              <option value="">Choose Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={data.phone}
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              name="address"
              required
              value={data.address}
              onChange={handleChange}
              maxLength="255"
              style={{ height: "100px" }}
            />
          </Form.Group>
          {isError && (
            <div className="alert alert-danger mt-2 " role="alert">
              {error && <p>{error}</p>}
            </div>
          )}
          <Button variant="primary" type="submit" className="submitBtn mb-10">
            Sign Up
          </Button>
        </Form>
      </div>
    </Modal>
  );
};

export default SignupModal;
