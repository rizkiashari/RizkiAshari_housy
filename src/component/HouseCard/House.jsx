import AmenityCard from "../Amenities/aminities";
import styles from "./House.module.css";

const HouseCard = ({
  houseImage,
  prices,
  houseCriteria,
  houseLocated,
  amenities,
}) => {
  // console.log("Oke");
  return (
    <div className={styles.houseCard}>
      <img
        style={{display: "block"}}
        className={styles.houseImg}
        src={houseImage}
        alt="house"
        width="270px"
      />
      <p className={styles.housePrice}>{prices}</p>
      <p className={styles.houseSpec}>{houseCriteria}</p>
      <p className={styles.houseAddress}>{houseLocated}</p>
      <div className={styles.amenities}>
        {amenities.map((amenity, index) => {
          return (
            amenity.value && <AmenityCard key={index} amenity={amenity.title} />
          );
        })}
      </div>
    </div>
  );
};

export default HouseCard;
