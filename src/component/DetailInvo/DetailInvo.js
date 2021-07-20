import React from "react";

import { Modal, Button, Form, Image } from "react-bootstrap";

import logoHouse from "../../assets/logoIcon/Icon.png";
import paymentBooking from "../../assets/Booking/payment.png";

const DetailInvo = (props) => {
  const { handleClose, showDetail } = props;

  const handleSubmit = (e) => {};
  return (
    <div className="modal ">
      <Modal
        show={showDetail}
        onHide={handleClose}
        size="xl"
        className="modalCustom modal-dialog modal-dialog-centered"
      >
        <Modal.Header closeButton></Modal.Header>

        <Form onSubmit={handleSubmit}>
          <div className="headerInvo">
            <Image src={logoHouse} />
            <div className="contentInvo">
              <h3>Booking</h3>
              <span className="day">Saturday, </span>
              <span className="tgl">30 March 2020</span>
            </div>
          </div>
          <div className="containerDetailInvo">
            <div className="InvoHouse">
              <h3>House Astina</h3>
              <p>
                Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,
                Tangerang Selatan
              </p>
              <p className="invoWaiting">Waiting Payment</p>
            </div>
            <div className="invoBooking">
              <div className="bulat">
                <div className="bulat1Invo"></div>
                <div className="garisInvo"></div>
                <div className="bulat2Invo"></div>
              </div>
              <div className="infoInvo">
                <div className="checkIn">
                  <h3>Check-in</h3>
                  <p>30 March 2020</p>
                </div>
                <div className="checkOut">
                  <h3>Check-out</h3>
                  <p>30 March 2021</p>
                </div>
              </div>
              <div className="houseInvo">
                <div className="Amenities">
                  <h3>Amenities</h3>
                  <p>Furnished</p>
                </div>
                <div className="typeRent">
                  <h3>Type of Rent</h3>
                  <p>Year</p>
                </div>
              </div>
            </div>
            <div className="uploadInvo">
              <Image src={paymentBooking} />
              <label class="custom-file-upload">
                <input type="file" />
                upload payment proof
              </label>
            </div>
          </div>
          <div className="data-user-invo">
            <table>
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Phone</th>
                <th></th>
              </tr>
              <tr>
                <td>1</td>
                <td>Radif Ganteng</td>
                <td>Male</td>
                <td>0839102931010</td>
                <td>Long time: 1 Year</td>
              </tr>
            </table>
            <div className="total d-flex">
              <p className="title">Total : </p>
              <p className="price"> Rp.3.000.000</p>
            </div>
            <div className="space">
              <Button variant="danger" className="">
                Cancel
              </Button>
              <Button
                style={{ backgroundColor: "#0ACF83", border: "none" }}
                className=""
              >
                Approve
              </Button>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default DetailInvo;
