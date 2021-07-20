// Import Icon
import logoHouse from "../../assets/logoIcon/Icon.png";
import barcode from "../../assets/Booking/qr-code.png";

// React
import { Button, Image } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useQuery } from "react-query";
import { API } from "../../config/api";
const History = () => {
  const { state } = useContext(UserContext);
  const { isLoading, data, error } = useQuery("transaction", async () => {
    const response = await API.get("/transactions");
    return response.data.data;
  });
  const Day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const Bulan = [
    "January",
    "February",
    "March",
    "April",
    "MAY",
    "June",
    "Juli",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (isLoading) return <p>... loading</p>;
  if (error) return <h1>Error occured: {error.response.data.message}</h1>;
  return (
    <div className="containerBooking">
      {data.transactionData.map(
        (trx, idx) =>
          state.user.id === trx.user.id &&
          state.user.listAs === "Tenant" &&
          trx.status === "Approve" && (
            <div className="boxBooking">
              <div className="headerBooking">
                <Image src={logoHouse} />
                <div className="contentBooking">
                  <h3>Invoice</h3>
                  <span className="day">
                    {Day[new Date(trx.createAt).getDay()]},{" "}
                  </span>
                  <span className="tgl">
                    {new Date(trx.createAt).getDay()}{" "}
                    {Bulan[new Date(trx.createAt).getMonth()]}{" "}
                    {new Date(trx.createAt).getFullYear()}{" "}
                  </span>
                </div>
              </div>
              <div className="containerDetailBooking">
                <div className="houseBooking">
                  <h3>{trx.house.name}</h3>
                  <p>
                    {trx.house.address}, {trx.house.city.name}
                  </p>
                  <p className="Approve">{trx.status}</p>
                </div>
                <div className="detailBooking">
                  <div className="bulat">
                    <div className="bulat1"></div>
                    <div className="garis"></div>
                    <div className="bulat2"></div>
                  </div>
                  <div className="infoBooking">
                    <div className="checkIn">
                      <h3>Check-in</h3>
                      <p>
                        {new Date(trx.checkin).getDay() + 2} {""}
                        {Bulan[new Date(trx.checkin).getMonth()]}{" "}
                        {new Date(trx.checkin).getFullYear()}
                      </p>
                    </div>
                    <div className="checkOut">
                      <h3>Check-out</h3>
                      <p>
                        {new Date(trx.checkout).getDay() + 2} {""}
                        {Bulan[new Date(trx.checkout).getMonth()]}{" "}
                        {new Date(trx.checkout).getFullYear()}
                      </p>
                    </div>
                  </div>
                  <div className="houseType">
                    <div className="Amenities">
                      <h3>Amenities</h3>
                      <span style={{ display: "inline" }}>
                        {" "}
                        {trx.house.Ameneties?.map((item, index) => (
                          <div className="ameniy">
                            <p>{item}</p>
                          </div>
                        ))}
                      </span>
                    </div>
                    <div className="typeRent">
                      <h3>Type of Rent</h3>
                      <p>{trx.house.typeRent}</p>
                    </div>
                  </div>
                </div>
                <div className="uploadPayment">
                  <Image src={barcode} />
                  <p>TCK0101</p>
                </div>
              </div>
              <div className="data-user">
                <table>
                  <tr>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>{trx.user.id}</td>
                    <td>{trx.user.name}</td>
                    <td>{trx.user.gender}</td>
                    <td>{trx.user.phone}</td>
                    <td>Long time: 1 {trx.house.typeRent}</td>
                  </tr>
                </table>
                <div className="total d-flex">
                  <p className="title">Total : </p>
                  <p className="price" style={{ color: "#3CF71E" }}>
                    Rp.{trx.total.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </div>
          )
      )}
      {data.transactionData.map(
        (trx, idx) =>
          state.user.listAs === "Owner" && (
            <div className="boxBooking">
              <div className="headerBooking">
                <Image src={logoHouse} />
                <div className="contentBooking">
                  <h3>Invoice</h3>
                  <span className="day">
                    {Day[new Date(trx.createAt).getDay()]},{" "}
                  </span>
                  <span className="tgl">
                    {new Date(trx.createAt).getDay()}{" "}
                    {Bulan[new Date(trx.createAt).getMonth()]}{" "}
                    {new Date(trx.createAt).getFullYear()}{" "}
                  </span>
                </div>
              </div>
              <div className="containerDetailBooking">
                <div className="houseBooking">
                  <h3>{trx.house.name}</h3>
                  <p>
                    {trx.house.address}, {trx.house.city.name}
                  </p>
                  {trx.status === "Approve" && (
                    <p className="Approve">{trx.status}</p>
                  )}
                  {trx.status === "Waiting Payment" && (
                    <p className="waitingPayment">{trx.status}</p>
                  )}
                  {trx.status === "Cancel" && (
                    <p className="waitingPayment">{trx.status}</p>
                  )}
                </div>
                <div className="detailBooking">
                  <div className="bulat">
                    <div className="bulat1"></div>
                    <div className="garis"></div>
                    <div className="bulat2"></div>
                  </div>
                  <div className="infoBooking">
                    <div className="checkIn">
                      <h3>Check-in</h3>
                      <p>
                        {new Date(trx.checkin).getDay() + 2} {""}
                        {Bulan[new Date(trx.checkin).getMonth()]}{" "}
                        {new Date(trx.checkin).getFullYear()}
                      </p>
                    </div>
                    <div className="checkOut">
                      <h3>Check-out</h3>
                      <p>
                        {new Date(trx.checkout).getDay() + 2} {""}
                        {Bulan[new Date(trx.checkout).getMonth()]}{" "}
                        {new Date(trx.checkout).getFullYear()}
                      </p>
                    </div>
                  </div>
                  <div className="houseType">
                    <div className="Amenities">
                      <h3>Amenities</h3>
                      <span style={{ display: "inline" }}>
                        {" "}
                        {trx.house.Ameneties?.map((item, index) => (
                          <div className="ameniy">
                            <p>{item}</p>
                          </div>
                        ))}
                      </span>
                    </div>
                    <div className="typeRent">
                      <h3>Type of Rent</h3>
                      <p>{trx.house.typeRent}</p>
                    </div>
                  </div>
                </div>
                <div className="uploadPayment">
                  <Image src={barcode} />
                  <p>TCK0101</p>
                </div>
              </div>
              <div className="data-user">
                <table>
                  <tr>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>{trx.user.id}</td>
                    <td>{trx.user.name}</td>
                    <td>{trx.user.gender}</td>
                    <td>{trx.user.phone}</td>
                    <td>Long time: 1 {trx.house.typeRent}</td>
                  </tr>
                </table>
                <div className="total d-flex">
                  <p className="title">Total : </p>
                  <p className="price" style={{ color: "#3CF71E" }}>
                    Rp.{trx.total.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default History;
