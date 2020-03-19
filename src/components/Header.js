import React from "react";
import "./App.css";

function Header() {
  return (
    <div class="ui secondary  menu header">
      <a class="item">Fly Events inc</a>
      <a class="ui item">Home</a>
        <a class="ui item">About</a>
        <a class="ui item">Events</a>
        <a class="ui item">Logout</a>
      {/* <div class="right menu">
        <a class="ui item">Home</a>
        <a class="ui item">About</a>
        <a class="ui item">Events</a>
        <a class="ui item">Logout</a>
      </div> */}
    </div>
  );
}

export default Header;
