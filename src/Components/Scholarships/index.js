import React, { useState} from "react";
// import "./style.css";
import Hand from "../../images/Untitled design (20) 1.png";
import Ring from "../../images/Group 1000004381.png";
import Arrow from "../../images/span.jss107.png";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";
import { BackgroundGradiant } from "../login/BackgroundGradient";
import { PreviousFinder } from "../finderCard/FinderPrevious";
import { FinderCard } from "../finderCard/finderCardBG";

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
function Scholarships() {
  // State to store the clicked country id
  const [selectedCountries, setSelectedCountries] = useState(null);
  const handleSmallDivCountryClick = (id) => {
    // Find the selected country based on the id
    const selectedCountriesData = data1.find((item) => item.id === id);
    // Store only the country name in session storage
    sessionStorage.setItem("selectedCountries", selectedCountriesData.country);
    const obj = {
      id: selectedCountriesData.id
    };
    sessionStorage.setItem("scholarship", JSON.stringify(obj));
    // Update the state to reflect the clicked country
    setSelectedCountries(selectedCountriesData);
  };

  const handleNextButtonClick = () => {
    // Check if a country has been selected
    if (selectedCountries) {
      // Clear the selected country from the state
      setSelectedCountries(null);
    } else {
      alert("Please select a country before proceeding to the next step.");
    }
  };


  // Retrieve the stored inputValues from session storage on component mount
  React.useEffect(() => {
    const englishTest = sessionStorage.getItem("scholarship");
    // Convert the stored value back to a number using Number() function
    if (englishTest !== '') {
      setSelectedCountries(JSON.parse(englishTest))
    }
  }, []);  

  return (
    <>
      <SeperateNavigation
        position={"absolute"}
      />
      <BackgroundGradiant height="auto" >
        <div className="whole-div-findd">
          <div>
            <Row justify="center">
              <Col xxl={12} xl={12} lg={12} md={10}>
                <div className="center-find">
                  <div>
                    <img src={Ring} alt="" className="ring-img" />
                    <h1 className="finetext-new">
                      “One step closer to <br /> Finding the best
                      <br /> <a href="/" className="finetext-new1">Scholarships</a> for
                      <br /> you”
                    </h1>
                  </div>
                </div>
              </Col>
              <Col xxl={12} xl={12} lg={12} md={10}>
                <div className="center-find12">
                  <div>
                    <img src={Hand} alt="" className="div-img-hand22" />
                  </div>
                </div>
              </Col>
            </Row>
            {/* <div>
              <img src={Plane} alt="" className="plane-img" />
              <p className="text-where-text">where do you want to study?</p>
            </div> */}
            <div className="main-container">
              <PreviousFinder
                margintop="3rem"
                isHeading={false}
                heading={`where do you want to study?`}
              />
              <FinderCard>
                <Row justify="center" className="width">
                  {data1.map((item) => (
                    <Col xl={8}>
                      <div className="center-coll-country">
                        <div className={`small-div-country ${ selectedCountries && selectedCountries.id === item.id
                              ? "border-highlight": ""}`}
                          onClick={() => handleSmallDivCountryClick(item.id)}>
                          <div>{item.img}</div>
                          <div>{item.country}</div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
                  <Link to="/scholarshipsOne" style={{ textDecoration: "none" }}>
                    <button
                      className={`btn-next ${
                        selectedCountries ? "" : "btn-next:disabled"
                      }`}
                      disabled={!selectedCountries}
                      onClick={handleNextButtonClick}
                    >
                      Next <img src={Arrow} alt="" className="im-size" />
                    </button>
                  </Link>
              </FinderCard>
            </div>
          </div>
        </div>
      </BackgroundGradiant>
    </>
  );
}

export default Scholarships;
