import React, { useState} from "react";

import "./style.css";
import Hand from "../../images/Untitled design (20) 1.png";
import Ring from "../../images/Group 1000004381.png";
import Country6 from "../../images/SVG.png";
import Arrow from "../../images/span.jss107.png";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";
import { BackgroundGradiant } from "../login/BackgroundGradient";
import { FinderCard } from "../finderCard/finderCardBG";
import { PreviousFinder } from "../finderCard/FinderPrevious";

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
function ScholarshipsOne() {
  const [purposes, setpurposes] = useState(null);

  const handleSmallDivCountryClick = (id) => {
    const purposesData = data.find((item) => item.id === id);
    sessionStorage.setItem("purposes", purposesData.purpose);
    const obj = {
      id: purposesData.id
    };
    sessionStorage.setItem("scholarshipOne", JSON.stringify(obj));
    setpurposes(purposesData);
  };

  const handleNextButtonClick = () => {
    if (purposes) {
      setpurposes(null); // Clear the selected country after storing it in local storage
    } else {
      // Show a message indicating that a country needs to be selected
      alert("Please select a country before proceeding to the next step.");
    }
  };

    // Retrieve the stored inputValues from session storage on component mount
    React.useEffect(() => {
      const englishTest = sessionStorage.getItem("scholarshipOne");
      // Convert the stored value back to a number using Number() function
      if (englishTest !== '') {
        setpurposes(JSON.parse(englishTest))
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
              <FinderCard>
                <PreviousFinder
                  margintop="3rem"
                  isHeading={true}
                  heading={'What degree do you want to pursue?'}
                />
                <div className="div-btn-both">
                  {data.map((item) => (
                    <div className={`small-div-country ${ purposes && purposes.id === item.id ? "border-highlight": ""}`}
                      onClick={() => handleSmallDivCountryClick(item.id)}>
                      <img src={Country6} alt="" style={{ marginRight: ".5rem" }} />{" "}
                      {item.purpose}
                    </div>
                  ))}
                </div>
                <Link to="/scholarshipsTwo" style={{ textDecoration: "none" }}>
                  <button
                    className={`btn-next ${purposes ? "" : "btn-next:disabled"}`}
                    disabled={!purposes}
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

export default ScholarshipsOne;
