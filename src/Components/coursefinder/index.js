import React from "react";
import "./style.css";
import Cale from "../../images/img.png";
import Arrow from "../../images/span.jss107.png";
import { Link } from "react-router-dom";
function Coursefinder() {
  return (
    <div className="bg-whole">
      <img src={Cale} alt="" className="back-img" />
      <div className="div-cour">
        <p className="text-cur">Study Buddy - CourseFinder</p>
        <p className="text-lorum">
          Navigate Your University Dreams with Precision! Use Our Course Finder
          <br />
          to Reveal Your Admission Possibilities Embark on your academic journey
          <br />
          with our innovative Course Finder tool. It's designed to estimate your
          <br />
          admission odds at your dream university, taking the guesswork out
          <br /> of your university application process!
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
