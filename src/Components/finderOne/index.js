import React, { useState, useEffect } from "react";
// import "./style.css";
import Global from "../../images/Huge Global.png";
import Line from "../../images/Vector 637.png";
import Air from "../../images/Vector (17).png";
import divLine from "../../images/div.png";
import Country6 from "../../images/SVG.png";
import Arrow1 from "../../images/span.jss107.png";

import { Link } from "react-router-dom";
import { FinderCard } from "../finderCard/finderCardBG";
import { PreviousFinder } from "../finderCard/FinderPrevious";
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";

const data = [
  {
    id: 1,
    purpose: "Bachelors",
  },
  {
    id: 2,
    purpose: "Masters",
  },
];
function FinderOne() {
  const [purpose, setpurpose] = useState(null);
  const [universityCount, setUniversityCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);

  const handleSmallDivCountryClick = (id) => {
    const purposeData = data.find((item) => item.id === id);
    sessionStorage.setItem("purpose", purposeData.purpose);
    const obj = {
      id: purposeData.id
    };
    sessionStorage.setItem("selectedOne", JSON.stringify(obj));
    setpurpose(purposeData);
    const universities = [
      // Example data for universities associated with each country
      { countryId: 1, name: "University A", universityCount: 170 },
      { countryId: 2, name: "University B", universityCount: 90 },
    ];

    const courses = [
      // Example data for courses associated with each country
      { countryId: 1, name: "Course X", courseCount: 280 },
      { countryId: 2, name: "Course Y", courseCount: 190 },

      // ... (more courses for other countries)
    ];
    const selectedCountryUniversities = universities.filter(
      (uni) => uni.countryId === id
    );
    setUniversityCount(selectedCountryUniversities[0].universityCount || 0);

    const selectedCountryCourses = courses.filter(
      (course) => course.countryId === id
    );

    setCourseCount(selectedCountryCourses[0].courseCount || 0);
  };

  const handleNextButtonClick = () => {
    if (purpose) {
      console.log("Selected purpose:", purpose);

      setpurpose(null); // Clear the selected country after storing it in local storage
    } else {
      // Show a message indicating that a country needs to be selected
      alert("Please select a country before proceeding to the next step.");
    }
  };

  // Retrieve the stored inputValues from session storage on component mount
  useEffect(() => {
    const englishTest = sessionStorage.getItem("selectedOne");
    // Convert the stored value back to a number using Number() function
    if (englishTest !== '') {
      setpurpose(JSON.parse(englishTest))
    }
  }, []);
  return (
    <>
      <SeperateNavigation />
      <div className="center-global scroll-x-hidden">
        <img src={Air} alt="" className="img-linee123" />
        <img src={Line} alt="" className="img-linee" />
        {purpose && (
          <div className="div-uni-count">
            <div>
              <h1>{universityCount}</h1>
              <p style={{ fontWeight: "500" }}>universities</p>
            </div>
            <img src={divLine} alt="" className="hr-line" />
            <div>
              <h1>{courseCount}</h1>
              <p style={{ fontWeight: "500" }}>courses</p>
            </div>
          </div>
        )}
        <img src={Global} alt="" className="img-linee" />
        <div className="main-container">
          <FinderCard>
            <PreviousFinder
              isHeading={true}
              heading={'What degree do you want to pursue?'}
            />
            <div className="div-btn-both">
              {data.map((item) => (
                <div
                  className={`small-div-country ${
                    purpose && purpose.id === item.id ? "border-highlight" : ""
                  }`}
                  onClick={() => handleSmallDivCountryClick(item.id)}
                >
                  <img src={Country6} alt="" style={{ marginRight: ".5rem" }} />{" "}
                  {item.purpose}
                </div>
              ))}
            </div>
            <Link to="/finderTwo" style={{ textDecoration: "none" }}>
              <button
                className={`btn-next ${purpose ? "" : "btn-next:disabled"}`}
                disabled={!purpose}
                onClick={handleNextButtonClick}
              >
                Next <img src={Arrow1} alt="" className="im-size" />
              </button>
            </Link>
          </FinderCard>
        </div>
      </div>
    </>
  );
}

export default FinderOne;
