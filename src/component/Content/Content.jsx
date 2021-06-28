import styles from "./Content.module.css";
import HouseCard from "../HouseCard/House";
import NotFound from "../NotFound/NotFound";

const Content = ({houseList, houseRent}) => {
  let priceRent = "";
  // console.log(props.housesList);
  if (houseList.length > 0) {
    return (
      <div className={styles.content}>
        {houseList.map((house, index) => {
          switch (houseRent) {
            case "Day":
              priceRent = house.prices.day.value;
              break;
            case "Month":
              priceRent = house.prices.month.value;
              break;
            default:
              priceRent = house.prices.year.value;
          }

          return (
            <HouseCard
              key={index}
              houseImage={house.images}
              prices={`Rp. ${priceRent} / ${houseRent}`}
              houseCriteria={`${house.criteria.bedroom} Beds, ${house.criteria.bathroom} Baths, ${house.criteria.sqft}sqft`}
              houseLocated={house.located}
              amenities={house.amenities}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <NotFound/>
    );
  }
};

export default Content;