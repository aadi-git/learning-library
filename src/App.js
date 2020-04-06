import React, { useState } from "react";
import "./App.scss";
import Home from "./Components/Home";

function App() {
  const [timeout, settimeout] = useState(0);
  setTimeout(() => {
    settimeout(timeout + 1);
  }, 1000);
  return <Home timeout={timeout}/>;
}

export default App;
