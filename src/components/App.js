import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import LandingPage from "./landing/LandingPage";
import EventPage from "./landing/EventPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/event" component={EventPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
