import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { useContext, useEffect } from "react";
import { UserContext } from "./contexts/userContext";
import Home from "./pages/Home";
import DetailProduct from "./component/DetailProduct/DetailProduct";
import Header from "./component/Navbar/Header";
import PrivateRoute from "./component/route/PrivateRoute";
import Profile from "./component/profile/Profile";
import Booking from "./component/Booking/Booking";
import History from "./component/History/History";
import { API, setAuthToken } from "./config/api";
if (localStorage.getItem("token")) {
  setAuthToken(localStorage.getItem("token"));
}
const App = () => {
  const { dispatch } = useContext(UserContext);
  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      if (!response.status !== 200) {
        return dispatch({ type: "AUTH_ERROR" });
      }
      let payload = response.data.data;
      payload.token = localStorage.getItem("token");
      dispatch({
        type: "AUTH_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "AUTH_ERROR" });
    }
  };
  useEffect(() => {
    checkUser();
  }, []);

  const client = new QueryClient();
  return (
    <Router>
      <QueryClientProvider client={client}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/roomList/:id" component={DetailProduct} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/history" component={History} />
        </Switch>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
