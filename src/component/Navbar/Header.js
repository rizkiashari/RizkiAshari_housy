import { Link, useHistory } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Logo from "../../assets/logoIcon/Icon.png";
import searchLogo from "../../assets/logoIcon/search-icon.png";
import LogoLogout from "../../assets/logoIcon/logoLogout.png";
import userLogo from "../../assets/logoIcon/logoUser.png";
import bilLogo from "../../assets/logoIcon/bill.png";
import booking from "../../assets/logoIcon/booking.png";

import ModalSignIn from "../signinModal";
import ModalSignUp from "../signupModal";
import { UserContext } from "../../contexts/userContext";
import data from "../../data/fakeData";

import {
  Nav,
  Navbar,
  FormControl,
  Button,
  Image,
  Form,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { setAuthToken } from "../../config/api";

const Header = () => {
  const [search, setSearch] = useState("");
  const { state, dispatch } = useContext(UserContext);
  const [showSignin, setshowSignin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const router = useHistory();
  // console.log("akuu state", state);
  // console.log("akuu state data", state.user);
  // console.log("akuu dispatch", dispatch);
  let profilePic = "";
  if (state.isLogin === true) {
    profilePic = state.user.profileImage;
  }

  useEffect(() => {
    if (!state.isLogin) {
      setshowSignin(false);
    }
    return () => {
      setshowSignin(false);
      setShowSignUp(false);
    };
  }, [state]);

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

  const handleSignout = (e) => {
    dispatch({
      type: "LOGOUT",
    });
    setAuthToken();
  };

  // console.log("saya state", state);
  return (
    <div className="fixed-1">
      <Navbar
        expand="lg"
        className="mx-4 fixed-top bg-white"
        style={{ width: "100%" }}
      >
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
            {state.isLogin && (
              <>
                <DropdownButton
                  align="end"
                  className="menu-drop"
                  title={
                    <Image
                      className="rounded-circle imgProfile"
                      src={profilePic}
                    />
                  }
                  variant="btn-secondary"
                  id="dropdown-menu-align-right"
                >
                  <div class="arrow-up"></div>
                  <Dropdown.Item eventKey="1" align="end">
                    <Link className="linkDrop" to="/profile">
                      <Image src={userLogo} className="logoLink" alt="Logo" />
                      Profile
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2" align="end">
                    <Link className="linkDrop" to="/booking">
                      <Image className="logoLink" src={booking} alt="Logo" />
                      My Booking
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="3" align="end">
                    <Link className="linkDrop" to="/history">
                      <Image className="logoLink" src={bilLogo} alt="Logo" />
                      History
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4" align="end">
                    <Button className="btn btnSignOut" onClick={handleSignout}>
                      <Image
                        className="logoutLink"
                        src={LogoLogout}
                        alt="Logo"
                      />
                      Logout
                    </Button>
                  </Dropdown.Item>
                </DropdownButton>
              </>
            )}
            {!state.isLogin && (
              <>
                <Button
                  className="btn btnWhite"
                  data-toggle="modal"
                  onClick={() => setshowSignin(true)}
                >
                  Sign In
                </Button>
                <Button
                  className="btn btn-light fw-bold"
                  onClick={() => setShowSignUp(true)}
                >
                  Sign Up
                </Button>

                <ModalSignUp
                  showSignUp={showSignUp}
                  handleClose={() => setShowSignUp(false)}
                />
                <ModalSignIn
                  show={showSignin}
                  handleClose={() => setshowSignin(false)}
                  handleSignIn={dispatch}
                />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
