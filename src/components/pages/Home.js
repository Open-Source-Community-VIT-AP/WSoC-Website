import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";
import CustomizedTimeline from "../CustomizedTimeline";
import Jumbotron from "react-bootstrap/Jumbotron";
import Sponsor from "../Sponsor";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <CustomizedTimeline />
      <Sponsor />
      <Footer />
    </>
  );
}

export default Home;
