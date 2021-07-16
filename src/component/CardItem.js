import { useHistory } from "react-router-dom";

import { Card } from "react-bootstrap";

const CardItem = ({ item }) => {
  const router = useHistory();

  const handlePushToDetail = (id) => {
    console.log(id);
    router.push(`roomList/${id}`);
  };
  return (
    <div className="cardContainer">
      <Card
        style={{ width: "18rem", marginBottom: "9px" }}
        onClick={() => handlePushToDetail(item.id)}
        className="CardCustom"
      >
        <div className="amenities">{item.amenities}</div>

        <Card.Img
          height={200}
          style={{ borderRadius: "20px", padding: "10px 10px" }}
          variant="top"
          src={item.image}
          alt="Image-1"
        />
        <Card.Body>
          <Card.Title className="customTitle">
            Rp.{item.price.toLocaleString("id-ID")}/{item.rent}
          </Card.Title>
          <Card.Title>
            <span className="fontCustom">
              {item.bedRoom} Beds, {item.bathroom} Baths, {item.area} sqft
            </span>
          </Card.Title>
          <Card.Text className="lokasiCustom">{item.city.name}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
