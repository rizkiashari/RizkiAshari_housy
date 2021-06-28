import Styles from "./aminities.module.css";

const aminities = ({ amenity }) => {
  return (
    <div className={Styles.amenityCard}>
      <p className={Styles.houseAmenity}>{amenity}</p>
    </div>
  );
};

export default aminities;
