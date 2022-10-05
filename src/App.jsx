import React, { useEffect } from "react";
import Home from "./pages/Home";
import ReactTooltip from "react-tooltip";


function App() {
  useEffect(() => {
    ReactTooltip.rebuild()
});

  return (
    <>
    <Home />
    <ReactTooltip delayHide={1000} />
    </>
  );
}

export default App;
