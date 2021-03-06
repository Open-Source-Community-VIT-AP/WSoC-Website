import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video2.mp4" autoPlay loop muted />
      <h1>Winter Is Here!</h1>
      <p>Program begins on 4th December</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Accepted List for WSoC 2020
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
