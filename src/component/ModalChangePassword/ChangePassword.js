import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
const ChangePassword = (props) => {
  const { handleClose, showChangePassword } = props;

  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  console.log("Data Old", data);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (data.newPassword !== data.confirmPassword) {
      console.log("dont match");
    }
  };
  return (
    <div className="modal">
      <Modal
        className="modal-dialog modal-dialog-centered"
        show={showChangePassword}
        onHide={handleClose}
      >
        <h2 className="title-Sign mx-auto">Change Password</h2>
        <div className="p-10 formCustom">
          <Form onSubmit={handleChangePassword}>
            <Form.Group className="mb-3" controlId="formBasicOldPass">
              <Form.Label>Old Password</Form.Label>
              <Form.Control
                type="text"
                name="oldPassword"
                onChange={handleChange}
                value={data.oldPassword}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPass">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="text"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNewPass">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="text"
                name="newPassword"
                value={data.newPassword}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="submitBtn mb-10">
              Save
            </Button>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default ChangePassword;
