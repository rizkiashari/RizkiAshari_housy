import { Row, Col } from "react-bootstrap";

import CardItem from "./CardItem";
import { API } from "../config/api";
import { useQuery } from "react-query";
import not_found from "../assets/Not Found/not-found.svg";

const CardList = () => {
  const { isLoading, data, error } = useQuery("houses", async () => {
    const response = await API.get("/houses");
    return response.data.data;
  });
  //console.log("saya data house", data);
  if (isLoading) return <p>... loading</p>;
  if (error) return <h1>Error occured: {error.response.data.message}</h1>;
  return (
    <Row className="customBgCard">
      {data.house.length <= 0 && (
        <img src={not_found} width="100%" height="100%" alt="not_found" />
      )}
      {data.house.length > 0 &&
        data.house.map((item, index) => (
          <Col key={index}>
            <CardItem item={item} />
          </Col>
        ))}
    </Row>
  );
};

export default CardList;
