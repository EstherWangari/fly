import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import LandingPage from "./landing/LandingPage";
import EventPage from "./landing/EventPage";
import About from "../components/about/About";
import AdminPage from './admin/AdminPage';
function App() {
  return (
      <div>
    
    {/* Creating paths to navigate to different pages */}
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/each-event" component={EventPage} />
        <Route path="/about" component={About} />
        <Route path="/admin" component={AdminPage} />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
