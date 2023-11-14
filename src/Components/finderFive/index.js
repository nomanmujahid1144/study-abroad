import React, { useState, useEffect } from "react";
// import "./style.css";
import Global from "../../images/Huge Global.png";
import Line from "../../images/Vector 637.png";
import Air from "../../images/Vector (18).png";
import divLine from "../../images/div.png";
import Country6 from "../../images/SVG (16).png";
import Country7 from "../../images/SVG (17).png";
import Country8 from "../../images/SVG (18).png";
import Country9 from "../../images/SVG (15).png";
import Arrow from "../../images/span.jss107.png";
import { InputNumber, Slider } from "antd";
import { Link } from "react-router-dom";
import { FinderCard } from "../finderCard/finderCardBG";
import { PreviousFinder } from "../finderCard/FinderPrevious";
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";

const data = [
  {
    id: 1,
    img: <img src={Country6} alt="" style={{ marginRight: ".5rem" }} />,
    test1: "TOEFL",
  },
  {
    id: 2,
    img: <img src={Country7} alt="" style={{ marginRight: ".5rem" }} />,
    test1: "IELTS",
  },
  {
    id: 3,
    img: <img src={Country8} alt="" style={{ marginRight: ".5rem" }} />,
    test1: "PTE",
  },
  {
    id: 4,
    img: <img src={Country9} alt="" style={{ marginRight: ".5rem" }} />,
    test1: "None",
  },
];
function FinderFive() {

  const [inputValues, setInputValues] = useState(1);
  const onChange = (newValue) => {
    sessionStorage.setItem("inputValues", newValue);
    setInputValues(newValue);
  };
  const [selectedtest1, setSelectedtest1] = useState(null);

  const handleSmallDivCountryClick = (id) => {
    const selectedtest1Data = data.find((item) => item.id === id);
    sessionStorage.setItem("selectedtest1", selectedtest1Data.test1);
    const obj = {
      id: selectedtest1Data.id
    };
    sessionStorage.setItem("selectedFive", JSON.stringify(obj));
    setSelectedtest1(selectedtest1Data);
  };

  const handleNextButtonClick = () => {
    if (selectedtest1) {
      console.log("selectedtest1:", selectedtest1);

      setSelectedtest1(null); // Clear the selected country after storing it in local storage
    } else {
      // Show a message indicating that a country needs to be selected
      alert("Please select a country before proceeding to the next step.");
    }
  };

  // Retrieve the stored inputValues from session storage on component mount
  useEffect(() => {
    const score = sessionStorage.getItem("inputValues");
    const englishTest = sessionStorage.getItem("selectedFive");
    // Convert the stored value back to a number using Number() function
    if ((score && englishTest) !== '') {
      setInputValues(Number(score));
      setSelectedtest1(JSON.parse(englishTest))
    }
  }, []);
  return (
    <>
      <SeperateNavigation />
      <div className="center-global scroll-x-hidden">
        <img src={Air} alt="" className="img-linee123456" />
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
              heading={'Which english test did you take?'}
            />
            <div className="div-btn-both12 gap-3">
              {data.map((item) => (
                <div
                  className={`small-div-country  ${
                    selectedtest1 && selectedtest1.id === item.id
                      ? "border-highlight"
                      : ""
                  }`}
                  onClick={() => handleSmallDivCountryClick(item.id)}
                >
                  <div>{item.img}</div>
                  {item.test1}
                </div>
              ))}
            </div>
            <div className="w-f3" >
              <p className="fs-5">select your score</p>
              <div className="d-flex">
                <div className="silde-bg me-3"  data-min-val="0" data-max-val="10">
                  <Slider min={1} max={10} onChange={onChange}
                    value={typeof inputValues === "number" ? inputValues : 0}
                    className="slides-width"
                  />
                </div>
                <InputNumber
                  readOnly
                  min={1}
                  max={10}
                  value={inputValues}
                  onChange={onChange}
                />
              </div>
            </div>
            <Link to="/finderSix" style={{ textDecoration: "none" }}>
              <button
                className={`btn-next ${selectedtest1 ? "" : "btn-next:disabled"}`}
                disabled={!selectedtest1}
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

export default FinderFive;
