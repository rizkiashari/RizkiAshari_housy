import { Row, Col } from "react-bootstrap";

import Sidebar from "../component/Sidebar";
import CardList from "../component/CardList";

import houseList from "../data/fakeData";

const Home = () => {
  return (
    <div className="homeCustom">
      <Row>
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col md={8}>
          <CardList data={houseList} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
