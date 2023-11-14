import React from "react";
import "./style.css";
import HeroAboutUs from "../../Components/heroabout";
import OurHistory from "../../Components/history";
import ThreeCard from "../../Components/threeaboutcard";
import WhyAboutUs from "../../Components/whyaboutus";
import { Container } from "react-bootstrap";

function AboutUs() {
  return (
    <>
      <div className="bg-clr">
        <HeroAboutUs />
      </div>
      <div>
        <Container>
          <WhyAboutUs />
        </Container>
      </div>
      <OurHistory />
      <ThreeCard />
    </>
  );
}

export default AboutUs;
