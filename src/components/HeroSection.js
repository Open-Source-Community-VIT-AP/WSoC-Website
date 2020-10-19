import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video3.mp4" autoPlay loop muted />
      <h1>Winter Is Almost Here!</h1>
      <p>Click below for Phase 1 Results</p>
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
