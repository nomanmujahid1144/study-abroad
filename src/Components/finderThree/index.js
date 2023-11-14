import React, { useState, useEffect } from "react";
// import "./style.css";
import Global from "../../images/Huge Global.png";
import Line from "../../images/Vector 637.png";
import Air from "../../images/mdi_aeroplane.png";
import divLine from "../../images/div.png";
import Country6 from "../../images/SVG.png";
import Arrow from "../../images/span.jss107.png";
import { InputNumber, Slider } from "antd";
import { Link } from "react-router-dom";
import { FinderCard } from "../finderCard/finderCardBG";
import { PreviousFinder } from "../finderCard/FinderPrevious";
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";
const data = [
  {
    id: 1,
    education: "12th",
  },
  {
    id: 2,
    education: "Bachelors",
  },
  {
    id: 3,
    education: "Master",
  },
];
function FinderThree() {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    sessionStorage.setItem("inputValue", newValue);
    setInputValue(newValue);
  };
  const [selectededucation, setSelectededucation] = useState(null);

  const handleSmallDivCountryClick = (id) => {
    const selectededucationData = data.find((item) => item.id === id);
    sessionStorage.setItem("selectededucation", selectededucationData.education);
    const obj = {
      id: selectededucationData.id
    };
    sessionStorage.setItem("selectedThree", JSON.stringify(obj));
    setSelectededucation(selectededucationData);
  };

  const handleNextButtonClick = () => {
    if (selectededucation) {
      console.log("selectededucation:", selectededucation);

      setSelectededucation(null); // Clear the selected country after storing it in local storage
    } else {
      // Show a message indicating that a country needs to be selected
      alert("Please select a country before proceeding to the next step.");
    }
  };

    // Retrieve the stored inputValues from session storage on component mount
    useEffect(() => {
      const score = sessionStorage.getItem("inputValue");
      const englishTest = sessionStorage.getItem("selectedThree");
      // Convert the stored value back to a number using Number() function
      if ((score && englishTest) !== '') {
        setInputValue(Number(score));
        setSelectededucation(JSON.parse(englishTest))
      }
    }, []);
  return (
    <>
      <SeperateNavigation />
      <div className="center-global scroll-x-hidden">
        <img src={Air} alt="" className="img-linee1234" />
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
              heading={'What is your current education level?'}
            />
            <div className="div-btn-both12">
              {data.map((item) => (
                <div
                  className={`small-div-country45  ${
                    selectededucation && selectededucation.id === item.id
                      ? "border-highlight"
                      : ""
                  }`}
                  onClick={() => handleSmallDivCountryClick(item.id)}
                >
                  <img src={Country6} alt="" style={{ marginRight: ".5rem" }} />{" "}
                  {item.education}
                </div>
              ))}
            </div>

            <div className="w-f3" >
              <p className="fs-5">enter your marks in %</p>
              <div className="d-flex">
                <div className="silde-bg me-3" data-min-val="0%" data-max-val="100%">
                  {console.log(inputValue, 'inputValue')}
                  <Slider min={1} max={100} onChange={onChange}
                    value={typeof inputValue === "number" ? inputValue : 0}
                    className="slides-width"
                  />
                </div>
                <InputNumber
                  readOnly
                  min={1}
                  max={20}
                  value={inputValue}
                  onChange={onChange}
                />
              </div>
            </div>
            <Link to="/finderFour" style={{ textDecoration: "none" }}>
              <button
                className={`btn-next ${
                  selectededucation ? "" : "btn-next:disabled"
                }`}
                disabled={!selectededucation}
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

export default FinderThree;
