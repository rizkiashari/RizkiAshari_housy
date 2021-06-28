// Import datepicker Css
import "react-datepicker/dist/react-datepicker.css";

// Dom React
import DatePicker from "react-datepicker";
import { useState } from "react";

// Image
import dateIcon from "../../assets/logoIcon/calendarIcon.png";
import dropIcon from "../../assets/logoIcon/datePolygon.png";
// Css
import styles from "./DateCustom.module.css";

const DateCustom = () => {
  const [selectDate, setSelectDate] = useState();

  return (
    <div className={styles.dateContainer}>
      <img src={dateIcon} alt="dateIcon" />
      <div className={styles.lineDate}></div>
      <div>
        <DatePicker
          className={styles.datePicker}
          placeholderText="Select your date"
          selected={selectDate}
          onChange={(date) => {
            setSelectDate(date);
          }}
        />
      </div>
      <img className={styles.polygonDate} src={dropIcon} alt="dateDrop" />
    </div>
  );
};

export default DateCustom;
