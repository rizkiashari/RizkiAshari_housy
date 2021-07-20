import React from "react";
import { Modal } from "react-bootstrap";

const PopUp = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <p>Pembayaran Anda Akan di Konfirmasi dalam 1 x 24 Jam</p>
          <p style={{textAlign: "center"}}>Untuk melihat pesanan Klik Disini Terimakasih</p>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default PopUp;
