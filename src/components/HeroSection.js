import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video3.mp4" autoPlay loop muted />
      <h1>Winter Is Coming</h1>
      <p>Join Us for our first Winter Season of Code!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          REGISTER
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
