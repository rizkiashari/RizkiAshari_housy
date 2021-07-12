// Import Icon
import logoHouse from "../../assets/logoIcon/Icon.png";

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
      </div>
    </div>
  );
};

export default Booking;
