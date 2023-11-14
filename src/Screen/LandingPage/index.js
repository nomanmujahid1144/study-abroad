import React from "react";
import HeroSection from "../../Components/heroSection";
import "./style.css";
import VideoSection from "../../Components/videoSection";
import RealGuidance from "../../Components/realGuidance";
import Coursefinder from "../../Components/coursefinder";
import Name from "../../Components/names";
import Faq from "../../Components/faq";
import Block from "../../Components/block";
import MentorX from "../../Components/mentorX";
import Review from "../../Components/review";
import Clock from "../../Components/clock";
function LandingPage() {
  return (
    <div>
      <div className="bg-clr">
        <HeroSection />
      </div>
      <VideoSection />
      <Clock />
      <RealGuidance />
      <Coursefinder />
      <MentorX />
      <Block />
      <Name />
      <Faq />
      <Review />
    </div>
  );
}

export default LandingPage;
