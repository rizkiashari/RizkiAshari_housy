import { createContext, useReducer } from "react";

export const FilterContext = createContext();

const initialState = {
  search: "",
  isSearch: false,

  filter: {
    duration: "Year",
    bedRoom: "",
    bathroom: "",
    furnished: false,
    petAllowed: false,
    sharedAccomodation: false,
    budget: "",
  },
  isFiltered: false,
};

const filterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FILTERIN":
      return {
        ...state,
        ...payload,
      };

    case "FILTEROUT":
      return {
        ...state,
        search: "",
        isSearch: false,
        filter: {
          duration: "Year",
          bedRoom: "",
          bathroom: "",
          furnished: false,
          petAllowed: false,
          sharedAccomodation: false,
          budget: "",
        },
        isFiltered: false,
      };
    default:
      throw new Error("unknown cases");
  }
};

export const FilterContextProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
