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
        <h4>Congratulations to all the selected students!</h4>
        <Jumbotron>
          
          <h5>Project Id: WSOC2001 (Productivity Monitor)</h5>
            <ListGroup>
          <ListGroup.Item>
            <p>
              <strong>Vineet Tiwari</strong>
            </p>{" "}
            <p>19MIS7058</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>
              <strong>Ashutosh Kumar Singh</strong>
            </p>{" "}
            <p>18BCE7082</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>
              <strong>Taha Junaid</strong>
            </p>{" "}
            <p>18BCD7072</p>
          </ListGroup.Item>
  <ListGroup.Item>
            <p>
              <strong>Susmita Pal</strong>
            </p>{" "}
            <p>19BCE7597</p>
          </ListGroup.Item>
        </ListGroup>
        </Jumbotron>
        <Jumbotron>
          
          <h5>Project Id: WSOC2002 (Event Hub)</h5>
            <ListGroup>
          <ListGroup.Item>
            <p>
              <strong>Sudhindra Pai</strong>
            </p>{" "}
            <p>18MIS7113</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>
              <strong>N Krishna Raj</strong>
            </p>{" "}
            <p>19BCE7357</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>
              <strong>Dasari Bhargav</strong>
            </p>{" "}
            <p>18BCD7017</p>
          </ListGroup.Item>
        </ListGroup>
        </Jumbotron>
        </div>
      <Footer />
    </div>
  );
}
