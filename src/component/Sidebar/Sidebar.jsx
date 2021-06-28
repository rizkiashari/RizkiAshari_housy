import Styles from "./Sidebar.module.css";

// Date
import DateCustom from "../Date/DateCustom";

const Sidebar = (
{ handleAmenities,
  amenities,
  handleRent,
  rent,
  handleBedroom,
  bedroom,
  handleBathroom,
  bathroom
}) => {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.Rent}>
        <p className={Styles.titleRents}>Type of Rent</p>
        <div className={Styles.RentOption} onChange={handleRent}>
          <Duration id="day" value="Day" rent={rent} />
          <Duration id="month" value="Month" rent={rent} />
          <Duration id="year" value="Year" rent={rent} />
        </div>
      </div>
      <div className={Styles.dateContainer}>
        <p className={Styles.dateTitle}>Date</p>
        <DateCustom />
      </div>
      <div>
        <p className={Styles.roomTitle}>Property room</p>
        <p className={Styles.roomSubTitle}>Bedroom</p>
        <div className={Styles.roomOptions} onChange={handleBedroom}>
          <RoomItem id="bedroom1" value="1" room={bedroom} />
          <RoomItem id="bedroom2" value="2" room={bedroom} />
          <RoomItem id="bedroom3" value="3" room={bedroom} />
          <RoomItem id="bedroom4" value="4" room={bedroom} />
          <RoomItem id="bedroom5plus" value="5+" room={bedroom} />
        </div>
        <p className={Styles.roomSubTitle}>Bathroom</p>
        <div className={Styles.roomOptions} onChange={handleBathroom}>
          <RoomItem id="bathroom1" value="1" room={bathroom} />
          <RoomItem id="bathroom2" value="2" room={bathroom} />
          <RoomItem id="bathroom3" value="3" room={bathroom} />
          <RoomItem id="bathroom4" value="4" room={bathroom} />
          <RoomItem id="bathroom5plus" value="5+" room={bathroom} />
        </div>
      </div>
      <div className={Styles.amenities}>
        <p className={Styles.amenitiesTitle}>Amenities</p>
        <div className={Styles.amenitiesOptions} onChange={handleAmenities}>
          {amenities.map((item, index) => {
            return (
              <AminitiesOption
                key={index}
                value={item.title}
                children={item.title}
                isChecked={item.value}
              />
            );
          })}
        </div>
      </div>
      <div className={Styles.budget}>
        <p className={Styles.budgetTitle}>Budget</p>
        <form className={Styles.budgetForm} action="">
          <span>Less than IDR.</span>
          <input type="text" min="0" step="any" />
        </form>
      </div>

      <div className={Styles.apply}>
        <button className={Styles.applyButton}>APPLY</button>
      </div>
    </div>
  );
};

const Duration = ({ id, value, rent }) => {
  return (
    <div
      className={Styles.rentOption}
      style={
        rent === value
          ? {
              backgroundColor: "#5a57ab",
              color: "#fff",
            }
          : {}
      }
    >
      <input
        className={Styles.rentRadio}
        type="radio"
        id={id}
        name="duration"
        value={value}
      />
      <label className={Styles.titleRent} htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

const RoomItem = ({ id, value, room }) => {
  return (
    <div
      className={Styles.roomOption}
      style={
        room === value
          ? {
              backgroundColor: "#5a57ab",
              color: "#fff",
            }
          : {}
      }
    >
      <input
        className={Styles.roomRadio}
        type="radio"
        id={id}
        name="room"
        value={value}
      />
      <label className={Styles.titleRoom} htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

const AminitiesOption = ({ value, children, isChecked }) => {
  return (
    <div className={Styles.amenitiesOption}>
      <label className={Styles.amenitiesLabel} htmlFor={value}>
        {children}
      </label>
      <input
        className={Styles.amenitiesCheckBox}
        type="checkbox"
        value={value}
        id={value}
        checked={isChecked}
        onChange={() => {}}
      />
    </div>
  );
};

export default Sidebar;
