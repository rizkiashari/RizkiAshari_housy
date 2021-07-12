import { Row, Col } from "react-bootstrap";

import Sidebar from "../component/Sidebar";
import CardList from "../component/CardList";

const Home = () => {
  return (
    <div className="homeCustom">
      <Row>
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col md={8}>
          <CardList />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
