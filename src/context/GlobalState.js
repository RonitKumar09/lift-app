import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = { LevelZero: true, LevelOne: false, LevelTwo: false };

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const updateFloorZero = (floor_no) => {
    dispatch({ type: "UPDATE_FLOOR_ZERO" });
  };
  const updateFloorOne = (floor_no) => {
    dispatch({ type: "UPDATE_FLOOR_ONE" });
  };
  const updateFloorTwo = (floor_no) => {
    dispatch({ type: "UPDATE_FLOOR_TWO" });
  };
  return (
    <GlobalContext.Provider
      value={{ state, updateFloorZero, updateFloorOne, updateFloorTwo }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
