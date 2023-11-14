import React, { useState, useEffect } from "react";
// import "./style.css";
import Global from "../../images/Huge Global.png";
import Line from "../../images/Vector 637.png";
import Air from "../../images/mdi_aeroplane.png";
import divLine from "../../images/div.png";
import Country6 from "../../images/SVG (14).png";
import Country7 from "../../images/SVG (15).png";
import Arrow from "../../images/span.jss107.png";
import { Link } from "react-router-dom";
import { FinderCard } from "../finderCard/finderCardBG";
import { PreviousFinder } from "../finderCard/FinderPrevious";
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";

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
function FinderFour() {

  const [selectedintake, setSelectedintake] = useState(null);

  const handleSmallDivCountryClick = (id) => {
    const selectedintakeData = data.find((item) => item.id === id);
    sessionStorage.setItem("selectedintake", selectedintakeData.intake);
    const obj = {
      id: selectedintakeData.id
    };
    sessionStorage.setItem("selectedFour", JSON.stringify(obj));
    setSelectedintake(selectedintakeData);
  };

  const handleNextButtonClick = () => {
    if (selectedintake) {
      console.log("selectedintake:", selectedintake);

      setSelectedintake(null); // Clear the selected country after storing it in local storage
    } else {
      // Show a message indicating that a country needs to be selected
      alert("Please select a country before proceeding to the next step.");
    }
  };

    // Retrieve the stored inputValues from session storage on component mount
    useEffect(() => {
      const englishTest = sessionStorage.getItem("selectedFour");
      // Convert the stored value back to a number using Number() function
      if (englishTest !== '') {
        setSelectedintake(JSON.parse(englishTest))
      }
    }, []);

  return (
    <>
      <SeperateNavigation />
      <div className="center-global scroll-x-hidden">
        <img src={Air} alt="" className="img-linee12345" />
        <img src={Line} alt="" className="img-linee" />
        <div className="div-uni-count">
          <div>
            <h1>150</h1>
            <p style={{ fontWeight: "500" }}>universities</p>
          </div>
          <img src={divLine} alt="" className="hr-line" />
          <div>
            <h1>1725</h1>
            <p style={{ fontWeight: "500" }}>courses</p>
          </div>
        </div>
        <img src={Global} alt="" className="img-linee" />
        <div className="main-container">
          <FinderCard>
            <PreviousFinder
              isHeading={true}
              heading={'What is your preferred intake'}
            />
            <div className="div-btn-both12 d-flex justify-content-center w-50 gap-3" >
              {data.map((item) => (
                <div
                    className={`small-div-country  ${
                      selectedintake && selectedintake.id === item.id
                        ? "border-highlight"
                        : ""
                    }`}
                    onClick={() => handleSmallDivCountryClick(item.id)}
                  >
                  <div>{item.img}</div>
                  <div>{item.intake}</div>
                </div>
              ))}
            </div>
            <Link to="/finderFive" style={{ textDecoration: "none" }}>
              <button
                className={`btn-next ${
                  selectedintake ? "" : "btn-next:disabled"
                }`}
                disabled={!selectedintake}
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

export default FinderFour;
