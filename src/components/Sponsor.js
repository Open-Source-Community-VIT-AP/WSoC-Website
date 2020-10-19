import React from "react";
import "./Cards.css";
import GMCLogo from "../assets/images/GMC_logo.png";
import CBLogo from "../assets/images/CBLogo.png";

function Sponsor() {
  return (
    <div className="cards">
      <h1>Sponsors</h1>
      <div className="cards__container">
        <div className="logo_wrapper">
          <a href="https://givemycertificate.com/" target="_blank">
            <img src={GMCLogo}></img>
          </a>
        </div>
      </div>
      <div className="cards__container">
        <div className="logo_wrapper">
          <a href="https://codingblocks.com/" target="_blank">
            <img src={CBLogo} height="75"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
