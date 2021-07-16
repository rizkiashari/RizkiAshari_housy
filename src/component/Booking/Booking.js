// Import Icon
import logoHouse from "../../assets/logoIcon/Icon.png";
import paymentBooking from "../../assets/Booking/payment.png";

// React
import { Image } from "react-bootstrap";
const Booking = () => {
  return (
    <div className="containerBooking">
      <div className="boxBooking">
        <div className="headerBooking">
          <Image src={logoHouse} />
          <div className="contentBooking">
            <h3>Booking</h3>
            <span className="day">Saturday, </span>
            <span className="tgl">30 March 2020</span>
          </div>
        </div>
        <div className="containerDetailBooking">
          <div className="houseBooking">
            <h3>House Astina</h3>
            <p>
              Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,
              Tangerang Selatan
            </p>
            <p className="waitingPayment">Waiting Payment</p>
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
                <p>30 March 2020</p>
              </div>
              <div className="checkOut">
                <h3>Check-out</h3>
                <p>30 March 2021</p>
              </div>
            </div>
            <div className="houseType">
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
          <div className="uploadPayment">
            <Image src={paymentBooking} />
            <button type="submit">
              <p>upload payment proof</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
