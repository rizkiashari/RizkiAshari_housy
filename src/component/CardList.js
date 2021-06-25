import { Row, Col } from "react-bootstrap";

import data from "../data/fakeData";
import CardItem from "./CardItem";

const CardList = () => {
  const { roomList } = data;
  return (
    <Row className="customBgCard">
      {roomList.map((item, index) => (
        <Col key={index}>
          <CardItem item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default CardList;
