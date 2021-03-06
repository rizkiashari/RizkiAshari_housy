import "../App.css";
import "react-datepicker/dist/react-datepicker.css";

import LogoDate from "../assets/logoIcon/calendarIcon.png";
import polyDate from "../assets/logoIcon/datePolygon.png";
import DatePicker from "react-datepicker";

import {
  InputGroup,
  Button,
  Image,
  Row,
  Col,
  Container,
  FormControl,
  ToggleButton,
} from "react-bootstrap";
import { useState } from "react";

const Sidebar = () => {
  const [checked, setChecked] = useState(false);
  const [startDate, setStartDate] = useState();
  // Type Of Rent
  const [type, setTypeOfRent] = useState("year");
  const typeOfRents = [
    { name: "Day", value: "day" },
    { name: "Month", value: "month" },
    { name: "Year", value: "year" },
  ];

  // console.log(type);

  // Property BedRoom
  const [bedroom, setBedroom] = useState("3");
  const bedrooms = [
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
    { name: "4", value: "4" },
    { name: "5+", value: "5" },
  ];

  // Property BathRoom
  const [bathroom, setBathroom] = useState("2");
  const bathrooms = [
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
    { name: "4", value: "4" },
    { name: "5+", value: "5" },
  ];
  console.log("bath", bathroom);
  console.log("bed", bedroom);
  return (
    <Container className="container ml-3">
      <Row>
        <Col>
          <Col>
            <h3 className="h3 mb-2">Type of Rent</h3>
          </Col>
          <Col>
            {typeOfRents.map((typeOfRent, key) => (
              <ToggleButton
                key={key}
                id={`radio-${key}`}
                type="radio"
                className="radioButton2 typeOfRent mr-4"
                name="radio"
                value={typeOfRent.value}
                checked={type === typeOfRent.value}
                onChange={(e) => setTypeOfRent(e.currentTarget.value)}
              >
                {typeOfRent.name}
              </ToggleButton>
            ))}
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
              <img src={LogoDate} alt="Logo" />
              <div className="lineDate"></div>
              <DatePicker
                className="pickerDate"
                placeholderText="Select Date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <img src={polyDate} alt="datapoly" className="datePoly" />
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
            {bedrooms.map((bedrm, key) => (
              <ToggleButton
                key={key}
                id={`radio-${key}`}
                type="radio"
                className="radioButton2 propertyRoomBtn mr-3"
                name="bedroom"
                value={bedrm.value}
                checked={bedroom === bedrm.value}
                onChange={(e) => setBedroom(e.currentTarget.value)}
              >
                {bedrm.name}
              </ToggleButton>
            ))}
          </Col>
          <Col>
            <h4 className="h4">Bathroom</h4>
          </Col>
          <Col>
            {bathrooms.map((bathrm, key) => (
              <ToggleButton
                key={key}
                id={`radios-${key}`}
                type="radio"
                className="radioButton2 propertyRoomBtn mr-3"
                name="bathroom"
                value={bathrm.value}
                checked={bathroom === bathrm.value}
                onChange={(e) => setBathroom(e.currentTarget.value)}
              >
                {bathrm.name}
              </ToggleButton>
            ))}
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
              <InputGroup.Checkbox
                className="bgCheckbox"
                aria-label="Checkbox"
              />
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
