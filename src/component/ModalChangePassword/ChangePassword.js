import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { API, setAuthToken } from "../../config/api";
const ChangePassword = (props) => {
  const { handleClose, showChangePassword, handleChangePass } = props;
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (!data.oldPassword || !data.newPassword || !data.confirmPassword) {
      setIsError(true);
      setError("Isi Semua Field");
    }
    if (data.oldPassword !== data.confirmPassword) {
      setIsError(true);
      setError("Password Don't Match");
    }
    if (data.oldPassword === data.newPassword) {
      setIsError(true);
      setError("Password Don't Same");
    }
    try {
      localStorage.getItem("token");
      const config = {
        "Content-Type": "application/json",
      };
      const response = await API.post("/change-password", data, config);
      console.log("Aku Response", response.data);
      setAuthToken(response.data.data.token);
      //localStorage.setItem("token", response.data.data.token);
      handleChangePass({
        type: "CHGPASS",
        payload: response.data.data,
      });
      handleClose(true);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
    }
  };
  return (
    <div className="modal">
      <Modal
        className="modal-dialog modal-dialog-centered"
        show={showChangePassword}
        onHide={handleClose}
        handleChangePass={handleChangePass}
      >
        <h2 className="title-Sign mx-auto">Change Password</h2>
        <div className="p-10 formCustom">
          <Form onSubmit={handleChangePassword}>
            <Form.Group className="mb-3" controlId="formBasicOldPass">
              {isError && (
                <div className="alert alert-danger mt-2 " role="alert">
                  {error && <p>{error}</p>}
                </div>
              )}
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
                type="texr"
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
