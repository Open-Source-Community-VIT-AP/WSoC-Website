import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";
import CustomizedTimeline from "../CustomizedTimeline";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <CustomizedTimeline />
      <Footer />
    </>
  );
}

export default Home;
