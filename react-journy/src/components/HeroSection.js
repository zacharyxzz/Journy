import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyles="btn--outline"
          buttonSize="btn--large"
        >
          Start planning
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
