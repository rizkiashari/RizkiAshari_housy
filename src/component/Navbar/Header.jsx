// Import Module Css
import styles from "./Header.module.css";
// Import Image
import brandLogo from "../../assets/logoIcon/Icon.png";
import searchIcon from "../../assets/logoIcon/search-icon.png";
import userIcon from "../../assets/logoIcon/User.png";
// Import State
import { useState } from "react";
//Import React-Dom
import { Link } from "react-router-dom";
const Header = ({ logged, handleSearch, searchText }) => {
  const [log, setLog] = useState(logged);

  return (
    <nav className={styles.Navbar}>
      <img src={brandLogo} className={styles.images} alt="brand" />
      <form className={styles.formContainer}>
        <input
          className={styles.inputSearch}
          type="text"
          onChange={handleSearch}
          value={searchText}
        />
        <div className={styles.arrow}></div>
        <button className={styles.btnSearch}>
          <img src={searchIcon} className={styles.imgSearch} alt="searchIcon" />
        </button>
      </form>
      {log ? (
        <div className="">
          <img src={userIcon} alt="user" />
        </div>
      ) : (
        <div className={styles.signContainer}>
          <Link
            to="/"
            onClick={() => {
              setLog(true);
            }}
          >
            <button className={styles.signinButton}>Sign In</button>
          </Link>
          <button className={styles.signupButton}>Sign Up</button>
        </div>
      )}
    </nav>
  );
};

export default Header;
