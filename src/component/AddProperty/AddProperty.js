import React from "react";
import { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { useQuery } from "react-query";
import { API } from "../../config/api";

const AddProperty = () => {
  const [Amenity, setAmenity] = useState([]);

  const [image, setImage] = useState({
    image: null,
  });
  const [detail_1, setDetail_1] = useState({
    detail_one: null,
  });
  const [detail_2, setDetail_2] = useState({
    detail_two: null,
  });
  const [detail_3, setDetail_3] = useState({
    detail_three: null,
  });

  // handle City
  const [city, setDataCity] = useState([
    {
      id: "",
      name: "",
    },
  ]);

  const fetchCity = async () => {
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const response = await API.get("/cities", city, config);
      console.log("RSPNN", response);
      if (response.status !== 200) {
        throw new Error("An error has occured");
      }
      const newData = response.data.data.map((city) => ({
        value: city.id,
        label: city.name,
      }));
      setDataCity(newData);
      console.log("RESPN", response.data.data);
      return response.data.data;
    } catch (error) {
      throw new Error("Internal Server Error");
    }
  };
  console.log("aku city", city);
  // Image
  const handleImage = (event) => {
    setImage({
      image: URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleDetailOne = (event) => {
    setDetail_1({
      detail_one: URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleDetailTwo = (event) => {
    setDetail_2({
      detail_two: URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleDetailThree = (event) => {
    setDetail_3({
      detail_three: URL.createObjectURL(event.target.files[0]),
    });
  };
  // End Image

  // Handle Amenities
  const Amenities = ["Furnished", "Pet Allowed", "Shared Accomodation"];

  const handleChangeAmenity = (e) => {
    if (e.target.checked) {
      //setAmenity[e.target.value] = e.target.value;
      setAmenity([...Amenity, ([e.target.name] = e.target.value)]);
    } else {
      setAmenity(Amenity.filter((item, idx) => item !== e.target.value));
    }
  };
  // Handle Amenities End

  const [data, setData] = useState({});

  console.log("data add Property", data);

  const handleChange = (e) => {
    setData({
      ...data,
      Ameneties: Amenity.join(","),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="containerProperty">
      <Form onSubmit={handleSubmit}>
        <div className="title">
          <h3>Add Property</h3>
        </div>
        <div className="containerContentProperty">
          <div className="Property">
            <h3>Name Property</h3>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="form-control"
            />
            <h3>City</h3>
            <select
              className="form-control bgbrown"
              name="cityId"
              onChange={handleChange}
            >
              <option value="">-</option>
              <option value="1">Jakarta</option>
              <option value="2">Tangerang Selatan, Podok Aren</option>
            </select>
            <h3>Address</h3>
            <textarea
              className="form-control textarea"
              name="address"
              onChange={handleChange}
            ></textarea>
            <h3>Price</h3>
            <input
              type="number"
              name="price"
              onChange={handleChange}
              className="form-control"
            />
            <h3>Area</h3>
            <input
              type="number"
              name="area"
              onChange={handleChange}
              className="form-control"
            />
            <h3>Type of Rent</h3>
            <select
              className="form-control bgbrown"
              name="typeRent"
              onChange={handleChange}
            >
              <option value="">-</option>
              <option value="Day">Day</option>
              <option value="Month">Month</option>
              <option value="Year">Year</option>
            </select>
            <h3>Amenities</h3>
            <div class="form-check checkboxAmenities">
              <div>
                {Amenities.map((item, index) => (
                  <>
                    <input
                      key={index}
                      class="form-check-input"
                      type="checkbox"
                      name={item}
                      value={item}
                      onChange={handleChangeAmenity}
                      id="defaultCheck1"
                    />
                    <label
                      class="form-check-label labelAmenities"
                      for="defaultCheck1"
                    >
                      {item}
                    </label>
                  </>
                ))}
              </div>
            </div>
            <h3>Bedroom</h3>
            <select
              className="form-control bgbrown"
              name="bedRoom"
              onChange={handleChange}
            >
              <option value="">-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <h3>Bathroom</h3>
            <select
              className="form-control bgbrown"
              name="bathroom"
              onChange={handleChange}
            >
              <option value="">-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <h3>Descriotion</h3>
            <textarea
              className="form-control textarea"
              name="description"
              onChange={handleChange}
            ></textarea>
            <div className="d-flex">
              <div className="row">
                <div className="col-md-3">
                  <Image
                    style={{
                      width: "40%",
                      marginBottom: "5px",
                      objectFit: "cover",
                    }}
                    src={image.image ? image.image : data.image}
                  />
                  <label htmlFor="tumbnail" className="form-label">
                    Tumbnail
                  </label>
                  <Form.Control
                    id="tumbnail"
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                  />
                </div>
                <div className="col-md-3">
                  <Image
                    style={{
                      width: "40%",
                      marginBottom: "5px",
                      objectFit: "cover",
                    }}
                    src={
                      detail_1.detail_one
                        ? detail_1.detail_one
                        : data.detail_one
                    }
                  />
                  <label htmlFor="detail_1" className="form-label">
                    Detail 1
                  </label>
                  <Form.Control
                    id="detail_1"
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={handleDetailOne}
                  />
                </div>
                <div className="col-md-3">
                  <Image
                    style={{
                      width: "40%",
                      marginBottom: "5px",
                      objectFit: "cover",
                    }}
                    src={
                      detail_2.detail_two
                        ? detail_2.detail_two
                        : data.detail_two
                    }
                  />
                  <label htmlFor="detail_2" className="form-label">
                    Detail 2
                  </label>
                  <Form.Control
                    id="detail_2"
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={handleDetailTwo}
                  />
                </div>
                <div className="col-md-3">
                  <Image
                    style={{
                      width: "50%",
                      marginBottom: "5px",
                      objectFit: "cover",
                    }}
                    src={
                      detail_3.detail_three
                        ? detail_3.detail_three
                        : data.detail_three
                    }
                  />
                  <label htmlFor="detail_3" className="form-label">
                    Detail 3
                  </label>
                  <Form.Control
                    id="detail_3"
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={handleDetailThree}
                  />
                </div>
              </div>
            </div>
          </div>
          <Button type="submit" className="btnSave">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddProperty;
