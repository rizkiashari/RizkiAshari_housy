import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { UserContextProvider } from "./contexts/userContext";
import App from "./App";
import { FilterContextProvider } from "./contexts/FilterContext";

ReactDOM.render(
  <React.StrictMode>
    <FilterContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </FilterContextProvider>
  </React.StrictMode>,
  document.getElementById("index")
);
