import "../App.css";

import LogoDate from "../assets/logoIcon/calendarIcon.png";

import {
  InputGroup,
  Button,
  Image,
  Row,
  Col,
  Container,
  FormControl,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { useState } from "react";

const Sidebar = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "day", value: "1" },
    { name: "month", value: "2" },
    { name: "year", value: "3" },
  ];

  return (
    <Container className="container ml-3">
      <Row>
        <Col>
          <Col>
            <h3 className="h3 mb-2">Type of Rent</h3>
          </Col>
          <Col>
            <ButtonGroup className="mb-2">
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant="secondary"
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col>
          <Col>
            <h3 className="h3">Date</h3>
          </Col>
          <Col>
            <InputGroup className="mb-3 date">
              <InputGroup.Text id="basic-addon1">
                <Image src={LogoDate} />
              </InputGroup.Text>
              <FormControl
                style={{ maxWidth: "200px" }}
                type="date"
                aria-label="date"
                aria-describedby="date"
              />
            </InputGroup>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col>
          <Col>
            <h3 className="h3 mb-2">Property Room</h3>
          </Col>
          <Col>
            <h4 className="h4 mb-2">Bedroom</h4>
          </Col>
          <Col>
            <Button value="1" className="btn btn-light">
              1
            </Button>
            <Button value="2" className="btn btn-light">
              2
            </Button>
            <Button value="3" className="btn selectedBtn">
              3
            </Button>
            <Button value="4" className="btn btn-light">
              4
            </Button>
            <Button value="5" className="btn btn-light">
              5+
            </Button>
          </Col>
          <Col>
            <h4 className="h4">Bathroom</h4>
          </Col>
          <Col>
            <Button value="1" className="btn btn-light">
              1
            </Button>
            <Button value="2" className="btn btn-light">
              2
            </Button>
            <Button value="3" className="btn selectedBtn">
              3
            </Button>
            <Button value="4" className="btn btn-light">
              4
            </Button>
            <Button value="5" className="btn btn-light">
              5+
            </Button>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col>
          <Col>
            <h3 className="h3">Amenities</h3>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text className="text-group">Funished</InputGroup.Text>
              <InputGroup.Checkbox aria-label="Checkbox" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text className="text-pet">
                Pet Allowed
              </InputGroup.Text>
              <InputGroup.Checkbox aria-label="Checkbox" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text className="text-shared">
                Shared Accomodation
              </InputGroup.Text>
              <InputGroup.Checkbox aria-label="Checkbox" />
            </InputGroup>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col>
          <Col>
            <h3 className="h3">Budget</h3>
          </Col>
          <Col>
            <label className="label">
              Less than IDR.
              <input type="text" className="marginCustom" />
            </label>
          </Col>
          <Col>
            <Button className="btn applyBtn">APPLY</Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
