import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

const Profile = () => {
  const { state, dispatch } = useContext(UserContext);

  console.log("Aku State Profile", state);

  return (
    <div className="mt-5">
      <div>
        <h1>Profile</h1>
      </div>

      <div>
        <h1>Name</h1>
      </div>
    </div>
  );
};

export default Profile;
