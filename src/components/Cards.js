import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out this year's Projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/image1.png"
              text="Project 1: Details to be uploaded soon. Check out this section by mid-September for more details."
              label="Level: Easy"
              path="/projects"
            />
            <CardItem
              src="images/image2.png"
              text="Project 2: Details to be uploaded soon. Check out this section by mid-September for more details."
              label="Level: Moderate"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
