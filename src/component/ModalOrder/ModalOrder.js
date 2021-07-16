import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModalOrder = (props) => {
  const { handleClose, showOrder } = props;
  const [data, setData] = useState({
    checkin: "",
    checkout: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="modal">
      <Modal
        className="modal-dialog modal-dialog-centered"
        showOrder={showOrder}
        onHide={handleClose}
      >
        <h2 className="title-Sign mx-auto">How long you will stay</h2>
        <div className="p-10 formCustom">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Check-in</Form.Label>
              <Form.Control
                type="date"
                name="check-in"
                onChange={handleChange}
                value={data.checkin}
                placeholder="Enter Username"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Check-out</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={data.checkout}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="submitBtn mb-10">
              Order
            </Button>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalOrder;
