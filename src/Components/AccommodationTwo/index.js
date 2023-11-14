import { Col,Row, message } from "antd";
import React, { useEffect, useState } from "react";
import "./style.css";
import Hand from "../../images/Untitled design (21) 1.png";
import Ring from "../../images/Group 1000004381.png";
import Country6 from "../../images/SVG (14).png";
import Country7 from "../../images/SVG (15).png";
import Arrow from "../../images/span.jss107.png";
import { useNavigate } from "react-router-dom";
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";
import { BackgroundGradiant } from "../login/BackgroundGradient";
import { PreviousFinder } from "../finderCard/FinderPrevious";
import { FinderCard } from "../finderCard/finderCardBG";
import { useDispatch } from "react-redux";
import { addAccomodation } from "../../redux/Actions/AccomodationAction";

const data = [
  {
    id: 1,
    img: <img src={Country6} alt="" style={{ marginRight: ".5rem" }} />,
    intake: "Jul - Sep 2023",
  },
  {
    id: 2,
    img: <img src={Country6} alt="" style={{ marginRight: ".5rem" }} />,
    intake: "Oct - Dec 2023",
  },
  {
    id: 3,
    img: <img src={Country6} alt="" style={{ marginRight: ".5rem" }} />,
    intake: "Jan - Mar 2024",
  },
  {
    id: 4,
    img: <img src={Country6} alt="" style={{ marginRight: ".5rem" }} />,
    intake: "Apr - Jun 2024",
  },
  {
    id: 5,
    img: <img src={Country6} alt="" style={{ marginRight: ".5rem" }} />,
    intake: "Jul - Sep 2024",
  },
  {
    id: 6,
    img: <img src={Country7} alt="" style={{ marginRight: ".5rem" }} />,
    intake: "Not Decided",
  },
];
function AccommodationTwo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const targetUrl = window.location.pathname + window.location.search;

  const [selectedAccintake, setSelectedAccintake] = useState(null);
  const [dataAccomodation, setData] = useState({});

  const handleSmallDivCountryClick = (id) => {
    const selectedAccintakeData = data.find((item) => item.id === id);
    sessionStorage.setItem("selectedAccintake", selectedAccintakeData.intake);
    const obj = {
      id: selectedAccintakeData.id
    };
    sessionStorage.setItem("accommodationTwo", JSON.stringify(obj));
    setSelectedAccintake(selectedAccintakeData);
  };

  useEffect(() => {
    setData({
      country: sessionStorage.getItem("selectedAccCountry"),
      city: sessionStorage.getItem("selectedAccCity"),
      intake: sessionStorage.getItem("selectedAccintake"),
    })
  },[selectedAccintake])

  const handleNextButtonClick = () => {
    if (selectedAccintake) {
      dispatch(addAccomodation(dataAccomodation, navigate, message, targetUrl))
      setSelectedAccintake(null); // Clear the selected country after storing it in local storage
    } else {
      // Show a message indicating that a country needs to be selected
      alert("Please select a country before proceeding to the next step.");
    }
  };

  // Retrieve the stored inputValues from session storage on component mount
  React.useEffect(() => {
    const englishTest = sessionStorage.getItem("accommodationTwo");
    // Convert the stored value back to a number using Number() function
    if (englishTest !== '') {
      setSelectedAccintake(JSON.parse(englishTest))
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
                  margintop="2rem"
                  isHeading={true}
                  heading={'What is your preferred intake?'}
                />
                <div className="div-btn-both12 d-flex justify-content-center w-50 gap-3">
                  {data.map((item) => (
                    <div className={`small-div-country  ${ selectedAccintake && selectedAccintake.id === item.id ? "border-highlight" : "" }`}
                      onClick={() => handleSmallDivCountryClick(item.id)} >
                      <div>{item.img}</div>
                      <div style={{ marginLeft: ".5rem" }}>{item.intake}</div>
                    </div>
                  ))}
                </div>
                  <button
                    className={`btn-next ${
                      selectedAccintake ? "" : "btn-next:disabled"
                    }`}
                    disabled={!selectedAccintake}
                    onClick={handleNextButtonClick}
                  >
                    Next <img src={Arrow} alt="" className="im-size" />
                  </button>
              </FinderCard>
            </div>
          </div>
        </div>
      </BackgroundGradiant>
    </>
  );
}

export default AccommodationTwo;
