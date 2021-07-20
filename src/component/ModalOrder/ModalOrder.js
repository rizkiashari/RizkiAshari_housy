import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { API } from "../../config/api";
import { UserContext } from "../../contexts/userContext";

const ModalOrder = (props) => {
  const { handleClose, showOrder } = props;
  const { state } = useContext(UserContext);
  const { id } = useParams();
  const router = useHistory();
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({
    houseId: id,
    checkin: "",
    checkout: "",
    status: "Waiting Payment",
    total: props.price,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (!data.checkin || !data.checkout) {
        setIsError(true);
        setError("Isi Semua Field");
      } else {
        const response = await API.post(`/transaction`, data, config);
        //console.log("response detail", response);
        if (response.status !== 200) {
          throw new Error("An error has occured");
        }

        router.push("/booking");
        return response.data.data;
      }
    } catch (error) {
      console.log(error);
      //console.log("Aku error", error.response.data);
    }
  };
  return (
    <div className="modal">
      <Modal
        className="modal-dialog modal-dialog-centered"
        show={showOrder}
        onHide={handleClose}
      >
        <h2 className="title-Sign mx-auto">How long you will stay</h2>
        <div className="p-10 formCustom">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Check-in</Form.Label>
              <Form.Control
                type="date"
                name="checkin"
                onChange={handleChange}
                value={data.checkin}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Check-out</Form.Label>
              <Form.Control
                type="date"
                name="checkout"
                value={data.checkout}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="submitBtn mb-10">
              Order
            </Button>
            {isError && (
              <div className="alert alert-danger mt-2 " role="alert">
                {error && <p>{error}</p>}
              </div>
            )}
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalOrder;
