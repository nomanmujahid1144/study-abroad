import React from "react";
import "./style.css";
import HeroIelts from "../../Components/heroielts";
import WhyUs from "../../Components/whystudents";
import AboutIelts from "../../Components/aboutielts";
import Academic from "../../Components/academic";
import Acceptability from "../../Components/acceptibility";
import VideoSection from "../../Components/videoSection";
import Faq from "../../Components/faq";

function Ielts() {
  return (
    <>
    <div className="bg-clr">
        <HeroIelts />
    </div>
    <WhyUs />
    <AboutIelts />
    <Academic />
    <Acceptability />
    <VideoSection />
    <Faq />
    </>
  );
}

export default Ielts;
