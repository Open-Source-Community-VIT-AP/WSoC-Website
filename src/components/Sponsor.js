import React from "react";
import "./Cards.css";
import GMCLogo from "../assets/images/GMC_logo.png";

function Sponsor() {
  return (
    <div className="cards">
      <h1>Sponsors</h1>
      <div className="cards__container">
        <div className="logo_wrapper">
          <img src={GMCLogo}></img>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
