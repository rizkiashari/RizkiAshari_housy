import React, { useState } from "react";
import { Button, Image, Table } from "react-bootstrap";
import { useQuery } from "react-query";

import not_found from "../assets/Not_Found/not-found.svg";
import ActionLogo from "../assets/Booking/Action.png";
import DetailInvo from "../component/DetailInvo/DetailInvo";
import { API } from "../config/api";
const OwnerHome = () => {
  const [showDetail, setShowDetail] = useState(false);

  const { isLoading, data, error } = useQuery("transaction", async () => {
    const response = await API.get("/transactions");
    return response.data.data;
  });
  if (isLoading) return <p>....Loading</p>;
  if (error) return <h1>Error occured: {error.response.data.message}</h1>;
  return (
    <div className="containerOwner">
      <div className="title">
        <p>Incoming Transaction</p>
      </div>
      <div className="contentTable">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Users</th>
              <th>Type of Rent</th>
              <th>Bukti Transfer</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          {data.transactionData.length <= 0 && (
            <img src={not_found} width="100%" height="100%" alt="not_found" />
          )}
          {data.transactionData.length > 0 &&
            data.transactionData.map((item, index) => (
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.user.name}</td>
                  <td>{item.house.typeRent}</td>

                  <td>
                    <a href={item.attachment} tab="_blank">
                      Click here
                    </a>
                  </td>
                  {item.status === "Approve" && (
                    <td style={{ color: "#0ACF83" }}>{item.status}</td>
                  )}
                  {item.status === "Cancel" && (
                    <td style={{ color: "#FF0742" }}>{item.status}</td>
                  )}
                  {(item.status === "Pending" ||
                    item.status === "Waiting Payment" ||
                    item.status === "waiting payment") && (
                    <td style={{ color: "#F7941E" }}>{item.status}</td>
                  )}
                  <td>
                    <Button
                      className="btnTransparent"
                      onClick={() => setShowDetail(true)}
                    >
                      <Image src={ActionLogo} />
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
        </Table>
        <DetailInvo
          showDetail={showDetail}
          handleClose={() => setShowDetail(false)}
        />
      </div>
    </div>
  );
};

export default OwnerHome;
