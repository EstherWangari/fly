import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import LandingPage from "./landing/LandingPage";
import EventPage from "./landing/EventPage";

function App() {
  return (
      <div>
    
    {/* Creating paths to navigate to different pages */}
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/event" component={EventPage} />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
