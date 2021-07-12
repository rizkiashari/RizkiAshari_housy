import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useQuery } from "react-query";
import { API } from "../../config/api";
import { Button, Image } from "react-bootstrap";
// image
import logoFullname from "../../assets/Profile/name.png";
import logoEmail from "../../assets/Profile/email.png";
import logoPass from "../../assets/Profile/password.png";
import logoStatus from "../../assets/Profile/status.png";
import logoGender from "../../assets/Profile/gender.png";
import logoPhone from "../../assets/Profile/phone.png";
import logoAddress from "../../assets/Profile/addres.png";
import ProfileIcon from "../../assets/Profile/Profile.png";
const Profile = () => {
  const { state } = useContext(UserContext);
  const { isLoading, isFetching, isFetched, isError, data, error } = useQuery(
    "user",
    async () => {
      const response = await API.get(`/user/${state.user.id}`);
      console.log("Aku Respon", response);
      return response.data.data;
    }
  );
  let fullName, email, gender, status, address, phone;
  if (data != null) {
    fullName = data.fullName;
    gender = data.gender;
    email = data.email;
    status = data.listAs.name;
    address = data.address;
    phone = data.phone;
  }

  //if (isLoading) return <p>... loading</p>;
  //console.log("AKu data username", state.user.username);
  //console.log("AKu State Pro", state.user.username);
  console.log("DATA", data);
  return (
    <div className="containerProfile">
      <div className="boxProfile">
        <div className="personalContainer">
          <div className="titleProfile">
            <h3>Personal info</h3>
          </div>
          <div className="containerContent">
            <Image src={logoFullname} alt="image" className="image" />
            <div className="content">
              <h3>{fullName}</h3>
              <p>Full name</p>
            </div>
          </div>
          <div className="containerContent">
            <Image src={logoEmail} alt="image" className="image" />
            <div className="content">
              <h3>{email}</h3>
              <p>Email</p>
            </div>
          </div>
          <div className="containerContent">
            <Image src={logoPass} alt="image" className="image logoPass" />
            <div className="content">
              <Button
                className="changePassword"
                data-toggle="modal"
                // onClick={}
              >
                Change Password
              </Button>
              <p>Password</p>
            </div>
          </div>
          <div className="containerContent">
            <Image src={logoStatus} alt="image" className="image" />
            <div className="content">
              <h3>{status}</h3>
              <p>Status</p>
            </div>
          </div>
          <div className="containerContent">
            <Image src={logoGender} alt="image" className="image" />
            <div className="content">
              <h3>{gender}</h3>
              <p>Gender</p>
            </div>
          </div>
          <div className="containerContent">
            <Image src={logoPhone} alt="image" className="image" />
            <div className="content">
              <h3>{phone}</h3>
              <p>Mobile phone</p>
            </div>
          </div>
          <div className="containerContent">
            <Image src={logoAddress} alt="image" className="image logoAdd" />
            <div className="content">
              <h3>{address}</h3>
              <p>Address</p>
            </div>
          </div>
        </div>
        <div className="imageProfileContainer">
          <Image src={ProfileIcon} alt="Profile" className="profileIcon" />
          <Button className="btnChange">Change Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
