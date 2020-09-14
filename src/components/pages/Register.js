import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "../HeroSection.css";
import "../../components/register.css";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Register() {
  return (
    <div>
      <div className="registerText">
        <h1>Registration</h1>
        <h5>Instructions</h5>
        <ListGroup>
          <ListGroup.Item>
            <p>
              <b>Eligibility</b>
            </p>{" "}
            <p>
              <b>B.Tech</b> - Years 1 to 3
            </p>{" "}
            <p>
              <b>Integrated M.Tech</b> - Years 1 to 4
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            The deadline to register is <b>20th September, 2020</b>
          </ListGroup.Item>
          <ListGroup.Item>
            Please fill in the details carefully as this information will be
            used for any further communication and official event documentation
            (includes event certificates, publications, etc.)
          </ListGroup.Item>
          <ListGroup.Item>
            <b>GitHub ID is mandatory.</b> Please create one before proceeding,
            if you don't have one.
          </ListGroup.Item>
  <ListGroup.Item>
            Once you submit the form, you will receive an e-mail with the further steps within the next 48 hours of submission.
          </ListGroup.Item>
          <ListGroup.Item>
            If you face any issues during the registration process, kindly write
            to: <b>osc@vitap.ac.in</b>
          </ListGroup.Item>
        </ListGroup>
        <Jumbotron>
          <p>
            <strong>Registrations will begin starting 06:00 PM IST, 14th September, 2020</strong>
          </p>
          <p>
            {/* <a href="https://forms.gle/CbBgpbzxTyhv6q1JA" target="_blank">
              <Button variant="primary">Proceed</Button>
            </a> */}
          </p>
        </Jumbotron>
      </div>
      <Footer />
    </div>
  );
}
