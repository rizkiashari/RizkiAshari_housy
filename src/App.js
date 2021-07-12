import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserContextProvider } from "./contexts/userContext";
import Home from "./pages/Home";
import DetailProduct from "./component/DetailProduct/DetailProduct";
import Header from "./component/Navbar/Header";
import PrivateRoute from "./component/route/PrivateRoute";
import Profile from "./component/profile/Profile";
import Booking from "./component/Booking/Booking";
import History from "./component/History/History";
const App = () => {
  const client = new QueryClient();
  return (
    <Router>
      <QueryClientProvider client={client}>
        <UserContextProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/roomList" component={DetailProduct} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/history" component={History} />
          </Switch>
        </UserContextProvider>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
