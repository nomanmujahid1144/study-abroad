import React, { useState, useEffect } from "react";
// import "./style.css";
import Global from "../../images/Huge Global.png";
import Line from "../../images/Vector 637.png";
import Air from "../../images/Vector (17).png";
import divLine from "../../images/div.png";
import Arrow from "../../images/span.jss107.png";
import { Col, Row} from "antd";
import { Link } from "react-router-dom";
import { FinderCard } from "../finderCard/finderCardBG";
import { PreviousFinder } from "../finderCard/FinderPrevious";
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";

const data1 = [
  {
    id: 1,
    img: (
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png"
        alt=""
        style={{
          borderRadius: "50%",
          width: "1.5rem",
          height: "1.5rem",
        }}
      />
    ),
    country: "United States",
  },
  {
    id: 2,
    img: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png"
        alt=""
        style={{
          borderRadius: "50%",
          width: "1.5rem",
          height: "1.5rem",
        }}
      />
    ),
    country: " United Kingdom",
  },

  {
    id: 3,
    img: (
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/1280px-Flag_of_Australia.svg.png"
        alt=""
        style={{
          borderRadius: "50%",
          width: "1.5rem",
          height: "1.5rem",
        }}
      />
    ),
    country: " Australia",
  },
  {
    id: 4,
    img: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_China.png/1024px-Flag_of_China.png"
        alt=""
        style={{
          borderRadius: "50%",
          width: "1.5rem",
          height: "1.5rem",
        }}
      />
    ),
    country: "  China",
  },
  {
    id: 5,
    img: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Spain_flag_300.png"
        alt=""
        style={{
          borderRadius: "50%",
          width: "1.5rem",
          height: "1.5rem",
        }}
      />
    ),
    country: "  Spain",
  },
  {
    id: 6,
    img: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png"
        alt=""
        style={{
          borderRadius: "50%",
          width: "1.5rem",
          height: "1.5rem",
        }}
      />
    ),
    country: "  France",
  },
  {
    id: 7,
    img: (
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png"
        alt=""
        style={{
          borderRadius: "50%",
          width: "1.5rem",
          height: "1.5rem",
        }}
      />
    ),
    country: "  Germany",
  },
  {
    id: 8,
    img: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_South_Korea.png"
        alt=""
        style={{
          borderRadius: "50%",
          width: "1.5rem",
          height: "1.5rem",
        }}
      />
    ),
    country: "  Korea",
  },
  {
    id: 9,
    img: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Italy_Flag.svg/1280px-Italy_Flag.svg.png"
        alt=""
        style={{
          borderRadius: "50%",
          width: "1.5rem",
          height: "1.5rem",
        }}
      />
    ),
    country: " Italy",
  },
];
function Finder() {
  // State to store the clicked country id
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [universityCount, setUniversityCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const handleSmallDivCountryClick = (id) => {
    // Find the selected country based on the id
    const selectedCountryData = data1.find((item) => item.id === id);
    // Store only the country name in session storage
    sessionStorage.setItem("selectedCountry", selectedCountryData.country);
    const obj = {
      id: selectedCountryData.id
    };
    sessionStorage.setItem("selected", JSON.stringify(obj));
    // Update the state to reflect the clicked country
    setSelectedCountry(selectedCountryData);
    const universities = [
      // Example data for universities associated with each country
      { countryId: 1, name: "University A", universityCount: 253 },
      { countryId: 2, name: "University B", universityCount: 149 },
      { countryId: 3, name: "University C", universityCount: 54 },
      { countryId: 4, name: "University D", universityCount: 70 },
      { countryId: 5, name: "University E", universityCount: 120 },
      { countryId: 6, name: "University F", universityCount: 90 },
      { countryId: 7, name: "University G", universityCount: 79 },
      { countryId: 8, name: "University H", universityCount: 30 },
      { countryId: 9, name: "University I", universityCount: 40 },
      // ... (more universities for other countries)
    ];

    const courses = [
      // Example data for courses associated with each country
      { countryId: 1, name: "Course X", courseCount: 23791 },
      { countryId: 2, name: "Course Y", courseCount: 46699 },
      { countryId: 3, name: "Course Z", courseCount: 11819 },
      { countryId: 4, name: "Course P", courseCount: 100 },
      { countryId: 5, name: "Course Q", courseCount: 250 },
      { countryId: 6, name: "Course R", courseCount: 120 },
      { countryId: 7, name: "Course O", courseCount: 886 },
      { countryId: 8, name: "Course N", courseCount: 170 },
      { countryId: 9, name: "Course M", courseCount: 160 },
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
    // Check if a country has been selected
    if (selectedCountry) {
      console.log("Selected Country:", selectedCountry);
      // Clear the selected country from the state
      setSelectedCountry(null);
    } else {
      alert("Please select a country before proceeding to the next step.");
    }
  };

  // Retrieve the stored inputValues from session storage on component mount
  useEffect(() => {
    const englishTest = sessionStorage.getItem("selected");
    // Convert the stored value back to a number using Number() function
    if (englishTest !== '') {
      setSelectedCountry(JSON.parse(englishTest))
    }
  }, []);
  return (
    <>
      <SeperateNavigation />
      <div className="center-global scroll-x-hidden">
        <img src={Air} alt="" className="img-linee1200" />
        <img src={Line} alt="" className="img-linee" />
        {selectedCountry && (
          <div className="div-uni-count">
            <div>
              <h1 className="counts">{universityCount}</h1>
              <p style={{ fontWeight: "500" }}>universities</p>
            </div>
            <img src={divLine} alt="" className="hr-line" />
            <div>
              <h1 className="counts">{courseCount}</h1>
              <p style={{ fontWeight: "500" }}>courses</p>
            </div>
          </div>
        )}
        <div style={{position: 'relative'}}>
          <img src={Global} alt="" className="img-linee" />
        </div>
        <div className="main-container">
            <PreviousFinder
              isHeading={false}
              heading={`where do you want to study?`}
            />
          <FinderCard>
            <Row justify="center" className="width">
              {data1.map((item) => (
                <Col xl={8}>
                  <div className="center-coll-country">
                    <div
                      className={`small-div-country ${
                        selectedCountry && selectedCountry.id === item.id ? "border-highlight" : ""}`}
                      onClick={() => handleSmallDivCountryClick(item.id)}
                    >
                      <div>{item.img}</div>
                      <div>{item.country}</div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
              <Link to="/finderOne" style={{ textDecoration: "none" }}>
              <button
                className={`btn-next ${selectedCountry ? "" : "btn-next:disabled"}`}
                disabled={!selectedCountry}
                onClick={handleNextButtonClick}
              >
                  Next <img src={Arrow} alt="" className="im-size" />
              </button>
            </Link>
          </FinderCard>
        </div>
      </div>
    </>
  );
}

export default Finder;
