import React, { useState, useEffect } from "react";
// import "./style.css";
import Global from "../../images/Huge Global.png";
import Line from "../../images/Vector 637.png";
import Air from "../../images/Vector11.png";
import divLine from "../../images/div.png";
import Country6 from "../../images/SVG (21).png";
import Country9 from "../../images/SVG (15).png";
import Arrow from "../../images/span.jss107.png";
import { InputNumber, Slider,  message } from "antd";
import { useNavigate } from "react-router-dom";
import { FinderCard } from "../finderCard/finderCardBG";
import { PreviousFinder } from "../finderCard/FinderPrevious";
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";
import { useDispatch } from "react-redux";
import { addUniversityFounder } from "../../redux/Actions/UniversityFinderAction";

const data = [
  {
    id: 1,
    img: <img src={Country6} alt="" style={{ marginRight: ".5rem" }} />,
    yes: "Yes",
  },
  {
    id: 2,
    img: <img src={Country9} alt="" style={{ marginRight: ".5rem" }} />,
    yes: "None",
  },
];
function FinderSeven() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputValueexper, setInputValueexper] = useState(1);
  const onChange = (newValue) => {
    sessionStorage.setItem("inputValueexper", newValue);
    setInputValueexper(newValue);
  };


  const [selectedyes, setSelectedyes] = useState(null);
  const [dataUniversityFinder, setData] = useState({});
  
  const targetUrl = window.location.pathname + window.location.search;

  const handleSmallDivCountryClick = (id) => {
    const selectedyesData = data.find((item) => item.id === id);
    sessionStorage.setItem("selectedyes", selectedyesData.yes);
    const obj = {
      id: selectedyesData.id
    };
    sessionStorage.setItem("selectedSeven", JSON.stringify(obj));
    setSelectedyes(selectedyesData);
  };

  const handleNextButtonClick = () => {
    if (selectedyes) {
      setData({
        country: sessionStorage.getItem("selectedCountry"),
        degree: sessionStorage.getItem("purpose"),
        field: sessionStorage.getItem("selectedfield"),
        education: {
          degree: sessionStorage.getItem("selectededucation"),
          marks: sessionStorage.getItem("inputValue")
        },
        intake: sessionStorage.getItem("selectedintake"),
        englishTest: {
          testName: sessionStorage.getItem("selectedtest1"),
          bands: sessionStorage.getItem("inputValues")
        },
        apptitudeTest: {
          testName: sessionStorage.getItem("selectedtest2"),
          marks: sessionStorage.getItem("inputValueap")
        },
        workExperience: {
          isExperience: selectedyes.yes === 'Yes' ? true : false,
          yearsOfExperience: inputValueexper
        }
      })
    } else {
      alert("Please select an option before proceeding to the next step.");
    }
  };

  useEffect(() => {
    if (Object.keys(dataUniversityFinder).length > 0) {
      dispatch(addUniversityFounder(dataUniversityFinder, navigate, message, targetUrl))
    }
  } ,[dataUniversityFinder])

  // Retrieve the stored inputValueexper from session storage on component mount
  useEffect(() => {
    const yearsOfExperience = sessionStorage.getItem("inputValueexper");
    const isExperience = sessionStorage.getItem("selectedSeven");

    // Convert the stored value back to a number using Number() function
    if ((yearsOfExperience && isExperience) !== '') {
      setInputValueexper(Number(yearsOfExperience));
      setSelectedyes(JSON.parse(isExperience));
    }
  }, []);
  return (
    <>
      <SeperateNavigation />
      <div className="center-global scroll-x-hidden">
        <img src={Air} alt="" className="img-linee12345678" />
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
              heading={'Do you have any work experience?'}
            />
            <div className="div-btn-both12 gap-3">
              {data.map((item) => (
                <div
                  className={`small-div-country  ${
                    selectedyes && selectedyes.id === item.id
                      ? "border-highlight"
                      : ""
                  }`}
                  onClick={() => handleSmallDivCountryClick(item.id)}
                >
                  <div>{item.img}</div>
                  {item.yes}
                </div>
              ))}
            </div>
            <div className="w-f3" >
              <p className="fs-5">how many years of experience</p>
              <div className="d-flex">
                <div className="silde-bg me-3"  data-min-val="0" data-max-val="10">
                  <Slider min={1} max={10} onChange={onChange}
                    value={typeof inputValueexper === "number" ? inputValueexper : 0}
                    className="slides-width"
                  />
                </div>
                <InputNumber
                  readOnly
                  min={1}
                  max={10}
                  value={inputValueexper}
                  onChange={onChange}
                />
              </div>
            </div>
              <button
                className={`btn-next ${selectedyes ? "" : "btn-next:disabled"}`}
                disabled={!selectedyes}
                onClick={handleNextButtonClick}
              >
                {"Submit"}{" "}
                <img src={Arrow} alt="" className="im-size" />
              </button>
          </FinderCard>
        </div>
      </div>
    </>
  );
}

export default FinderSeven;
