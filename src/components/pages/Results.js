import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "../HeroSection.css";
import "../../components/register.css";
import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Results() {
  return (
    <div >
      <div className="registerText">
        <h1>Results - Accepted List</h1>
        <Jumbotron>
          <p>
            <strong>Will be announced on 20th October, 2020</strong>
          </p>
        </Jumbotron>
        </div>
      <Footer />
    </div>
  );
}
