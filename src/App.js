import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { UserContextProvider } from "./contexts/userContext";
import Home from "./pages/Home";
import SignupModal from "./component/signupModal";
import DetailProduct from "./component/Product/detailProduct";
import Header from "./component/Navbar/Header";
import Profile from "./component/profile/Profile";
import Booking from "./component/Booking/Booking";
import History from "./component/History/History";
const App = () => {
  return (
    <Router>
      <UserContextProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/roomList" component={DetailProduct} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/history" component={History} />
          <Route exact path="/signup" component={SignupModal} />
        </Switch>
      </UserContextProvider>
    </Router>
  );
};

export default App;
