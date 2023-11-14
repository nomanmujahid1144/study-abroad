import { Col, Row } from "antd";
import React, { useState } from "react";
import "./style.css";
import Hand from "../../images/Untitled design (21) 1.png";
import Ring from "../../images/Group 1000004381.png";
import Arrow from "../../images/span.jss107.png";
import { Link } from "react-router-dom";
import { FinderCard } from "../finderCard/finderCardBG";
import { PreviousFinder } from "../finderCard/FinderPrevious";
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";
import { BackgroundGradiant } from "../login/BackgroundGradient";
const data = [
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
function Accommodation() {
  // State to store the clicked country id
  const [selectedAccCountry, setSelectedAccCountry] = useState(null);
  const handleSmallDivCountryClick = (id) => {
    // Find the selected country based on the id
    const selectedAccCountryData = data.find((item) => item.id === id);
    // Store only the country name in session storage
    sessionStorage.setItem("selectedAccCountry", selectedAccCountryData.country);
    const obj = {
      id: selectedAccCountryData.id
    };
    sessionStorage.setItem("accommodation", JSON.stringify(obj));
    // Update the state to reflect the clicked country
    setSelectedAccCountry(selectedAccCountryData);
  };

  const handleNextButtonClick = () => {
    // Check if a country has been selected
    if (selectedAccCountry) {
      // Clear the selected country from the state
      setSelectedAccCountry(null);
    } else {
      alert("Please select a country before proceeding to the next step.");
    }
  };

  // Retrieve the stored inputValues from session storage on component mount
  React.useEffect(() => {
    const englishTest = sessionStorage.getItem("accommodation");
    // Convert the stored value back to a number using Number() function
    if (englishTest) {
      setSelectedAccCountry(JSON.parse(englishTest))
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
                      “Find your <br /> Accommodation <br /> near{" "}
                      <a href="/" className="finetext-new1">Top Universities</a> <br />{" "}
                      across the Globe”
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
                margintop="2rem"
                isHeading={false}
                heading={`Where do you want to find your home?`}
              />
              <FinderCard>
                <Row justify="center" className="width">
                  {data.map((item) => (
                    <Col xl={8}>
                      <div className="center-coll-country">
                        <div className={`small-div-country ${ selectedAccCountry && selectedAccCountry.id === item.id ? "border-highlight" : "" }`}
                          onClick={() => handleSmallDivCountryClick(item.id)} >
                          <div>{item.img}</div>
                          <div>{item.country}</div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
                <Link to="/accommodationOne" style={{ textDecoration: "none" }}>
                  <button
                    className={`btn-next ${
                      selectedAccCountry ? "" : "btn-next:disabled"
                    }`}
                    disabled={!selectedAccCountry}
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

export default Accommodation;
