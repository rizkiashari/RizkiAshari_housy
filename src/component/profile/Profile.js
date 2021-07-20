import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { useQuery } from "react-query";
import { API } from "../../config/api";
import { Button, Form, Image, InputGroup } from "react-bootstrap";
// image
import logoFullname from "../../assets/Profile/name.png";
import logoEmail from "../../assets/Profile/email.png";
import logoPass from "../../assets/Profile/password.png";
import logoStatus from "../../assets/Profile/status.png";
import logoGender from "../../assets/Profile/gender.png";
import logoPhone from "../../assets/Profile/phone.png";
import logoAddress from "../../assets/Profile/addres.png";
import userLogo from "../../assets/logoIcon/logoUser.png";
// Modal Change Password
import ChangePassword from "../ModalChangePassword/ChangePassword";
import { useHistory } from "react-router-dom";
const Profile = () => {
  const { state, dispatch } = useContext(UserContext);

  //Privew Image
  const [previewImage, setPreviewImage] = useState({
    previewImage: null,
  });

  const [showChangePassword, setShowChangePassword] = useState(false);
  const { isLoading, data, error, refetch } = useQuery("user", async () => {
    const response = await API.get(`/user/${state.user.id}`);
    return response.data.data;
  });

  // Photo
  const [photoProfile, setPhotoProfile] = useState({
    profileImage: null,
  });

  // Cek Foto
  const handleChangeFile = (e) => {
    setPhotoProfile({
      ...photoProfile,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };

  // Handle Change Foto
  const handleChangePhoto = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImage", photoProfile.profileImage);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await API.post("/change-picture", formData, config);
    refetch();
    return response.data.photoProfile;
  };

  let fullName, email, gender, status, address, phone, profileUser;
  if (data != null) {
    fullName = data.fullName;
    gender = data.gender;
    email = data.email;
    status = data.listAs.name;
    address = data.address;
    phone = data.phone;
    profileUser = data.profileImage;
  }

  if (isLoading) return <p>... loading</p>;

  return (
    <Form onSubmit={handleChangePhoto}>
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
                  onClick={() => setShowChangePassword(true)}
                >
                  Change Password
                </Button>
                <p>Password</p>
              </div>
              <ChangePassword
                showChangePassword={showChangePassword}
                handleClose={() => setShowChangePassword(false)}
                handleChangePass={dispatch}
              />
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
            {profileUser === null && (
              <Image src={userLogo} alt="Profile" className="profileIcon" />
            )}
            {profileUser && (
              <Image src={profileUser} alt="Profile" className="profileIcon" />
            )}
            <Form.Control
              id="fileInput"
              type="file"
              accept="image/*"
              className="btn btn-primary"
              style={{
                zIndex: 10,
                marginTop: "-10px",
                position: "absolute",
                display: "none",
                cursor: "pointer",
              }}
              name="profileImage"
              onChange={handleChangeFile}
            />
            <label htmlFor="fileInput" className="btnChange">
              Change Photo Profile
            </label>
            <button type="submit" className="btnChange">
              Save
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Profile;
