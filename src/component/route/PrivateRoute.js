import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const login = false;

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          login ? <Component {...props} /> : <Redirect to="/signin" />
        }
      />
    </>
  );
};

export default PrivateRoute;
