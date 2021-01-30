import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import FloorState from "./components/FloorState";

const App = () => {
  return (
    <GlobalProvider>
      <FloorState />
    </GlobalProvider>
  );
};

export default App;
