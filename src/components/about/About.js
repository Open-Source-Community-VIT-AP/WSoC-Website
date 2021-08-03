import React from "react";
import aboutimg from "../../assets/aboutimg.png";
import {
  AboutContainer,
  TextContainer,
  Heading,
  Para,
  AboutImage,
} from "./AboutElements";

function About() {
  return (
    <>
      <AboutContainer id="about">
        <TextContainer>
          <Heading>What is WSoC ?</Heading>
          <Para>
            Winter Season of Code is a mind-blowing program, literally, for all
            student developers out there. This program aims to enhance skills of
            student developers by providing them with exciting projects to work
            upon, and the icing on the cake is that mentors are already assigned
            to help them out. As a result, student developers would have more
            knowledge of open-source software. This year, we are going to be
            having a 3-month long program with 5 projects to choose from.
            <br />
            <br />
            Students will be actively contributing and by the end of the
            program, we hope to have those projects deployed.
          </Para>
        </TextContainer>
        <AboutImage src={aboutimg}></AboutImage>
      </AboutContainer>
    </>
  );
}

export default About;
