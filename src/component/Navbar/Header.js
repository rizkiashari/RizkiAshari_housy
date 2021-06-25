import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

import Logo from "../../assets/logoIcon/Icon.png";
import searchLogo from "../../assets/logoIcon/search-icon.png";

import ModalSignIn from "../signinModal";
import ModalSignUp from "../signupModal";

import data from "../../data/fakeData";

import "../../App.css";

import { Nav, Navbar, FormControl, Button, Image, Form } from "react-bootstrap";

const Header = () => {
  const [search, setSearch] = useState("");

  const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const router = useHistory();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const roomList = data.roomList.find((item) => item.amenities === search);
    if (roomList) {
      return router.push(`/roomList/${roomList.id}`);
    }
  };

  return (
    <Navbar expand="lg" className="mx-4 my-2">
      <Link to="/">
        <Image src={Logo} alt="logoHeader" className="logoNav mx-2" />
      </Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex mx-auto searchCustom">
          <FormControl
            type="search"
            className="searchCustom"
            autoComplete="off"
            placeholder="Search"
            style={{ width: "300px", height: "25px", border: 0 }}
            aria-label="Search"
            name="search"
            onChange={handleChange}
            value={search}
          />
          <Button
            variant="outline"
            className="btnSearch"
            onClick={handleSubmit}
            style={{ border: 0 }}
            id="search-button"
          >
            <Image src={searchLogo} alt="iconSearch" className="iconSearch" />
          </Button>
        </Form>
        <Nav className="mx-2" style={{ maxHeight: "100px" }} navbarScroll>
          <Button
            className="btn btnWhite"
            data-toggle="modal"
            onClick={() => setShow(true)}
          >
            Sign In
          </Button>
          <Button
            className="btn btn-light fw-bold"
            onClick={() => setShowSignUp(true)}
          >
            Sign Up
          </Button>
        </Nav>
      </Navbar.Collapse>
      <ModalSignUp
        showSignUp={showSignUp}
        handleClose={() => setShowSignUp(false)}
      />
      <ModalSignIn show={show} handleClose={() => setShow(false)} />
    </Navbar>
  );
};

export default Header;
