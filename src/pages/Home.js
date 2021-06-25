import { Row, Col } from "react-bootstrap";

import Sidebar from "../component/Sidebar";
import CardList from "../component/CardList";
import Header from "../component/Header";

const Home = () => {
  return (
    <div className="homeCustom">
      <Header />
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
