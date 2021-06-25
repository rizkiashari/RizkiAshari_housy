import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Form, Button, Modal } from "react-bootstrap";

const signinModal = (props) => {
  // const [data, setData] = useState(null);
  // const handleChange = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.userName]: e.target.value,
  //   });
  // };

  const handleSubmit = () => {};

  const { handleClose, show } = props;

  return (
    <Modal show={show} onHide={handleClose} className="">
      <h2 className="title-Sign mx-auto">Sign In</h2>
      <div className="p-10 formCustom">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" />
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

export default signinModal;
