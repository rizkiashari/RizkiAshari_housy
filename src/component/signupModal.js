import React from "react";

import { Link, useHistory } from "react-router-dom";

import { Form, Button, Modal } from "react-bootstrap";

const SignupModal = (props) => {
  const { handleClose, showSignUp } = props;
  return (
    <Modal
      show={showSignUp}
      onHide={handleClose}
      className="modal-dialog modal-dialog-centered"
    >
      <h2 className="title-Sign mx-auto">Sign Up</h2>
      <div className="p-10 formCustom">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Button
            variant="primary"
            className="submitBtn mb-10"
            onClick={handleClose}
          >
            Sign Up
          </Button>
        </Form>
      </div>
    </Modal>
  );
};

export default SignupModal;
