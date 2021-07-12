import { Col, Image, Row } from "react-bootstrap";
import house1 from "../../assets/images/1.jpg";
import house2 from "../../assets/images/2.jpg";
import house3 from "../../assets/images/3.jpg";
import house4 from "../../assets/images/4.jpg";

const DetailProduct = () => {
  return (
    <div className="containerDetailProduct">
      <div className="containerContentImage">
        <Row>
          <Col>
            <Image src={house1} alt="House1" className="house1" />
          </Col>
        </Row>
        <Row>
          <div className="detailImage d-flex">
            <Col>
              <Image src={house2} alt="House1" />
            </Col>
            <Col>
              <Image src={house3} alt="House1" />
            </Col>
            <Col>
              <Image src={house4} alt="House1" />
            </Col>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default DetailProduct;
