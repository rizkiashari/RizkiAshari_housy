import { useState } from "react";

import Sidebar from "../../component/Sidebar/Sidebar";
import Header from "../../component/Navbar/Header";
import Content from '../../component/Content/Content';
import { houseList } from "../../data/houseList";

const Home = ({ isLogged }) => {
  const [searchText, setSearchText] = useState("");
  const [rent, setRent] = useState("Year");
  const [bedroom, setBedroom] = useState("2");
  const [bathroom, setBathroom] = useState("1");
  const [amenities, setAmenities] = useState([
    {
      title: "Furnished",
      value: false,
    },
    {
      title: "Pet Allowed",
      value: false,
    },
    {
      title: "Shared Accomodation",
      value: false,
    },
  ]);
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearchInput = (houseList) => {
    const res = houseList.filter((house) => {
      if (house.located.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
    });
    return res;
 }
  const handleRent = (e) => {
    setRent(e.target.value);
  };
  const handleAmenities = (e) => {
    const newAmenities = [...amenities];
    newAmenities.map((amenity, index) => {
      if (amenity.title === e.target.value) {
        amenity.value = !amenity.value;
      }
      return amenity;
    });

    setAmenities(newAmenities);
  };
  const handleBedroom = (e) => {
    setBedroom(e.target.value);
  };

  const handleBathroom = (e) => {
    setBathroom(e.target.value);
  };
  const filterHouseBasedOnCriterias = (houseList) => {
    return houseList.filter((houses) => {
      if (
        houses.criteria.bedroom == bedroom &&
        houses.criteria.bathroom == bathroom
      ) {
        return houses;
      }
    });
  };
  const filterHouse = (houseList) => {
    const filteredHouseBasedOnSearchInput = handleSearchInput(houseList);
    const filteredHouseBasedOnAmenities = filterHouseBasedOnAmenities(
      filteredHouseBasedOnSearchInput
    );
    const filterHouseBasedOnCriteria = filterHouseBasedOnCriterias(
      filteredHouseBasedOnAmenities
    );
    return filterHouseBasedOnCriteria;
  };

  const filterHouseBasedOnAmenities = (houseList) => {
    const res = houseList.filter((house) => {
      if (!amenities[0].value && !amenities[1].value && !amenities[2].value) {
        return houseList;
      }
      const filteredAmenities = house.amenities.filter((amenity, index) => {
        if (
          amenity.title === amenities[index].title &&
          amenity.value === amenities[index].value
        ) {
          return house;
        }
      });

      if (filteredAmenities.length === 3) {
        return house;
      }
    });

    return res;
  };
  
  
  return (
    <div className="homeCustom">
      <Header
        logged={isLogged}
        handleSearch={handleSearch}
        searchText={searchText}
      />
      <div>
        <Sidebar
          handleAmenities={handleAmenities}
          amenities={amenities}
          handleRent={handleRent}
          rent={rent}
          handleBathroom={handleBathroom}
          bathroom={bathroom}
          handleBedroom={handleBedroom}
          bedroom={bedroom}
        />
        <Content houseList={filterHouse(houseList)} houseRent={rent}/>
      </div>
      
    </div>
  );
  
};

export default Home;
