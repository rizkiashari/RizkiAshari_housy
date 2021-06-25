import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import signinModal from "./component/signinModal";
import signupModal from "./component/signupModal";
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={signinModal} />
          <Route exact path="/signup" component={signupModal} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
