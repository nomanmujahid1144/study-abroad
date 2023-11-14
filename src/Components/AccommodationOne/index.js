import { Col, Row } from "antd";
import React, { useState } from "react";
import "./style.css";
import Hand from "../../images/Untitled design (21) 1.png";
import Ring from "../../images/Group 1000004381.png";
import Country from "../../images/Vector (19).png";
import Arrow from "../../images/span.jss107.png";
import { Link } from "react-router-dom";
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";
import { BackgroundGradiant } from "../login/BackgroundGradient";
import { PreviousFinder } from "../finderCard/FinderPrevious";
import { FinderCard } from "../finderCard/finderCardBG";
const data = [
  {
    id: 1,
    img: <img src={Country} alt="" />,
    city: "London",
  },
  {
    id: 2,
    img: <img src={Country} alt="" />,
    city: "Liverpool",
  },

  {
    id: 3,
    img: <img src={Country} alt="" />,
    city: "Cambridge",
  },
  {
    id: 4,
    img: <img src={Country} alt="" />,
    city: "Birmingham",
  },
  {
    id: 5,
    img: <img src={Country} alt="" />,
    city: "Leicester",
  },
  {
    id: 6,
    img: <img src={Country} alt="" />,
    city: "Sheffield",
  },
  {
    id: 7,
    img: <img src={Country} alt="" />,
    city: "Nottingham",
  },
  {
    id: 8,
    img: <img src={Country} alt="" />,
    city: "Coventry",
  },
  {
    id: 9,
    img: <img src={Country} alt="" />,
    city: "Leeds",
  },
];
function AccommodationOne() {
  const [selectedAccCity, setSelectedAccCity] = useState(null);
  const handleSmallDivCountryClick = (id) => {
    // Find the selected country based on the id
    const selectedAccCityData = data.find((item) => item.id === id);
    // Store only the country name in session storage
    sessionStorage.setItem("selectedAccCity", selectedAccCityData.city);
    const obj = {
      id: selectedAccCityData.id
    };
    sessionStorage.setItem("accommodationOne", JSON.stringify(obj));
    // Update the state to reflect the clicked country
    setSelectedAccCity(selectedAccCityData);
  };

  const handleNextButtonClick = () => {
    // Check if a country has been selected
    if (selectedAccCity) {
      // Clear the selected country from the state
      setSelectedAccCity(null);
    } else {
      alert("Please select a country before proceeding to the next step.");
    }
  };

  // Retrieve the stored inputValues from session storage on component mount
  React.useEffect(() => {
    const englishTest = sessionStorage.getItem("accommodationOne");
    // Convert the stored value back to a number using Number() function
    if (englishTest !== '') {
      setSelectedAccCity(JSON.parse(englishTest))
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
            <FinderCard>
              <PreviousFinder
                margintop="2rem"
                isHeading={true}
                heading={`Mention your city in United Kingdom`}
              />
              <Row justify="center" className="width">
                {data.map((item) => (
                  <Col xl={8}>
                    <div className="center-coll-country">
                      <div className={`small-div-country ${ selectedAccCity && selectedAccCity.id === item.id ? "border-highlight" : "" }`}
                          onClick={() => handleSmallDivCountryClick(item.id)} >
                        <div>{item.img}</div>
                        <div style={{ marginLeft: ".5rem" }}>{item.city}</div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              <Link to="/accommodationTwo" style={{ textDecoration: "none" }}>
                <button
                  className={`btn-next ${
                    selectedAccCity ? "" : "btn-next:disabled"
                  }`}
                  disabled={!selectedAccCity}
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

export default AccommodationOne;
