import React, { useState, useEffect } from "react";
// import "./style.css";
import Global from "../../images/Huge Global.png";
import Line from "../../images/Vector 637.png";
import Air from "../../images/Vector (18).png";
import divLine from "../../images/div.png";
import Country6 from "../../images/SVG (19).png";
import Country7 from "../../images/SVG (20).png";
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
    test2: "SAT",
  },
  {
    id: 2,
    img: <img src={Country7} alt="" style={{ marginRight: ".5rem" }} />,
    test2: "ACT",
  },
  {
    id: 3,
    img: <img src={Country9} alt="" style={{ marginRight: ".5rem" }} />,
    test2: "None",
  },
];
function FinderSix() {

  const [inputValueap, setInputValueap] = useState(1);
  const onChange = (newValue) => {
    sessionStorage.setItem("inputValueap", newValue);
    setInputValueap(newValue);
  };
  const [selectedtest2, setSelectedtest2] = useState(null);

  const handleSmallDivCountryClick = (id) => {
    const selectedtest2Data = data.find((item) => item.id === id);
    sessionStorage.setItem("selectedtest2", selectedtest2Data.test2);
    const obj = {
      id: selectedtest2Data.id
    };
    sessionStorage.setItem("selectedSix", JSON.stringify(obj));
    setSelectedtest2(selectedtest2Data);
  };

  const handleNextButtonClick = () => {
    if (selectedtest2) {
      console.log("selectedtest2:", selectedtest2);

      setSelectedtest2(null); // Clear the selected country after storing it in local storage
    } else {
      // Show a message indicating that a country needs to be selected
      alert("Please select a country before proceeding to the next step.");
    }
  };

  // Retrieve the stored inputValueap from session storage on component mount
  useEffect(() => {
    const score = sessionStorage.getItem("inputValueap");
    const apptitudeText = sessionStorage.getItem("selectedSix");
    // Convert the stored value back to a number using Number() function
    if ((score && apptitudeText) !== '') {
      setInputValueap(Number(score));
      setSelectedtest2(JSON.parse(apptitudeText))
    }
  }, []);
  return (
    <>
      <SeperateNavigation />
      <div className="center-global scroll-x-hidden">
        <img src={Air} alt="" className="img-linee1234567" />
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
              heading={'Which aptitude test did you take?'}
            />
            <div className="div-btn-both12 gap-3">
              {data.map((item) => (
                <div
                  className={`small-div-country  ${
                    selectedtest2 && selectedtest2.id === item.id
                      ? "border-highlight"
                      : ""
                  }`}
                  onClick={() => handleSmallDivCountryClick(item.id)}
                >
                  <div>{item.img}</div>
                  {item.test2}
                </div>
              ))}
            </div>
            <div className="w-f3" >
              <p className="fs-5">select your score</p>
              <div className="d-flex">
                <div className="silde-bg me-3"  data-min-val="0" data-max-val="100">
                  <Slider min={1} max={100} onChange={onChange}
                    value={typeof inputValueap === "number" ? inputValueap : 0}
                    className="slides-width"
                  />
                </div>
                <InputNumber
                  readOnly
                  min={1}
                  max={10}
                  value={inputValueap}
                  onChange={onChange}
                />
              </div>
            </div>
            <Link to="/finderSeven" style={{ textDecoration: "none" }}>
              <button
                className={`btn-next ${selectedtest2 ? "" : "btn-next:disabled"}`}
                disabled={!selectedtest2}
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

export default FinderSix;
