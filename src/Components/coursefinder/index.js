import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
// Images
import Cale from "../../images/img.webp";
import Arrow from "../../images/span.jss107.webp";
function Coursefinder() {
  return (
    <div className="bg-whole">
      <img src={Cale} alt="" className="back-img" />
      <div className="div-cour">
        <p className="text-cur">Study Buddy: The best Study Abroad Course Finder!</p>
        <p className="text-lorum">
        Want to know the probability of seeking overseas education before beginning your process? Use our Course Finder to get accurate advice on International Studies.
Using this tool will help you get a personalized experience with abroad counseling and understand the odds of your success when it comes to visiting your dream country to achieve your ambitions without any hurdles.
          Navigate Your University Dreams with Precision! Use Our Course Finder
          {/* <br />
          to Reveal Your Admission Possibilities Embark on your academic journey
          <br />
          with our innovative Course Finder tool. It's designed to estimate your
          <br />
          admission odds at your dream university, taking the guesswork out
          <br /> of your university application process! */}
        </p>
        <Link to="/finder" style={{ textDecoration: "none" }}>
          <button className="btn-checking ">
            Check admit probability{" "}
            <img src={Arrow} alt="" className="im-size" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Coursefinder;
