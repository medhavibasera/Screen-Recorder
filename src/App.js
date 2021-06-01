import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { Router } from 'react-router-dom';
import Router from "./components/Router";
import TimeTracker from "./components/TimeTracker"
function App() {
  return (
    <div className="App">
      <TimeTracker/>
      <Router />
    </div>
  );
}

export default App;
