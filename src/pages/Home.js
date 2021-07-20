import { Row, Col } from "react-bootstrap";

import Sidebar from "../component/Sidebar";
import CardList from "../component/CardList";
import { useQuery } from "react-query";
import { API } from "../config/api";

const Home = () => {
  const { isLoading, data, error } = useQuery("houses", async () => {
    const response = await API.get("/houses");
    return response.data.data;
  });
  return (
    <div className="homeCustom">
      <Row>
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col md={8}>
          <CardList data={data} isLoading={isLoading} error={error} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
