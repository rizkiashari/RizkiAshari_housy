// Import Icon
import logoHouse from "../../assets/logoIcon/Icon.png";
import paymentBooking from "../../assets/Booking/payment.png";

// React
import { Button, Image, Form } from "react-bootstrap";
import { API } from "../../config/api";
import { useQuery } from "react-query";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
const Booking = () => {
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
  console.log("Aku satte", state);
  console.log("data", data);
  if (isLoading) return <p>... loading</p>;
  if (error) return <h1>Error occured: {error.response.data.message}</h1>;
  return (
    <div className="containerBooking">
      <Form className="mt-2">
        {data.transactionData.map(
          (transaction, index) =>
            state.user.id === transaction.user.id &&
            state.user.listAs === "Tenant" &&
            transaction.status === "Waiting Payment" && (
              <>
                <div className="boxBooking">
                  <div className="headerBooking">
                    <Image src={logoHouse} />
                    <div className="contentBooking">
                      <h3>Booking</h3>
                      <span className="day">
                        {Day[new Date(transaction.createAt).getDay()]},
                      </span>
                      <span className="tgl">
                        {new Date(transaction.createAt).getDay()}{" "}
                        {Bulan[new Date(transaction.createAt).getMonth()]}{" "}
                        {new Date(transaction.createAt).getFullYear()}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="containerDetailBooking">
                    <div className="houseBooking">
                      <h3>{transaction.house.name}</h3>
                      <p>
                        {transaction.house.address},{" "}
                        {transaction.house.city.name}
                      </p>
                      <p className="waitingPayment">{transaction.status}</p>
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
                            {new Date(transaction.checkin).getDay() + 2} {""}
                            {
                              Bulan[new Date(transaction.checkin).getMonth()]
                            }{" "}
                            {new Date(transaction.checkin).getFullYear()}
                          </p>
                        </div>
                        <div className="checkOut">
                          <h3>Check-out</h3>
                          <p>
                            {new Date(transaction.checkout).getDay() + 2} {""}
                            {
                              Bulan[new Date(transaction.checkout).getMonth()]
                            }{" "}
                            {new Date(transaction.checkout).getFullYear()}
                          </p>
                        </div>
                      </div>
                      <div className="houseType">
                        <div className="Amenities">
                          <h3>Amenities</h3>
                          {transaction.house.Ameneties?.map((item, index) => (
                            <div className="ameniy">
                              <p>{item}</p>
                            </div>
                          ))}
                        </div>
                        <div className="typeRent">
                          <h3>Type of Rent</h3>
                          <p>{transaction.house.typeRent}</p>
                        </div>
                      </div>
                    </div>
                    <div className="uploadPayment">
                      <Image src={paymentBooking} />
                      <label class="custom-file-upload">
                        <input type="file" />
                        upload payment proof
                      </label>
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
                        <td>{index}</td>
                        <td>{transaction.user.name}</td>
                        <td>{transaction.user.gender}</td>
                        <td>{transaction.user.phone}</td>
                        <td>Long time: 1 {transaction.house.typeRent}</td>
                      </tr>
                    </table>
                    <div className="total d-flex">
                      <p className="title">Total : </p>
                      <p className="price">
                        Rp.{transaction.total.toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>
                </div>
                <Button type="submit" className="btn-booking">
                  Pay
                </Button>
              </>
            )
        )}
      </Form>
    </div>
  );
};

export default Booking;
