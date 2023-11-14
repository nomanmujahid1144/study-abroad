import React, { useState, useEffect } from "react";
// import "./style.css";
import Global from "../../images/Huge Global.png";
import Line from "../../images/Vector 637.png";
import Air from "../../images/Vector (17).png";
import divLine from "../../images/div.png";
import Country from "../../images/SVG (3).png";
import Country1 from "../../images/SVG (4).png";
import Country2 from "../../images/SVG (5).png";
import Country3 from "../../images/SVG (7).png";
import Country4 from "../../images/SVG (8).png";
import Country5 from "../../images/SVG (9).png";
import Country6 from "../../images/SVG (10).png";
import Country7 from "../../images/SVG (11).png";
import Arrow from "../../images/span.jss107.png";
import { Link } from "react-router-dom";
import { FinderCard } from "../finderCard/finderCardBG";
import { PreviousFinder } from "../finderCard/FinderPrevious";
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";
const data = [
  {
    id: 1,
    img: <img src={Country} alt="" />,
    field: "Business and Management",
  },
  {
    id: 2,
    img: <img src={Country1} alt="" />,
    field: "Computer Science and IT",
  },

  {
    id: 3,
    img: <img src={Country2} alt="" />,
    field: "Engineering",
  },
  {
    id: 4,
    img: <img src={Country3} alt="" />,
    field: "Social Science",
  },
  {
    id: 5,
    img: <img src={Country4} alt="" />,
    field: "Architecture",
  },
  {
    id: 6,
    img: <img src={Country5} alt="" />,
    field: "Professional Studies",
  },
  {
    id: 7,
    img: <img src={Country6} alt="" />,
    field: "Hospitality and Tourism",
  },
  {
    id: 8,
    img: <img src={Country7} alt="" />,
    field: "Journalism and Media",
  },
  {
    id: 9,
    img: <img src={Country7} alt="" />,
    field: "Science",
  },
  {
    id: 10,
    img: <img src={Country7} alt="" />,
    field: "Sports",
  },
  {
    id: 11,
    img: <img src={Country7} alt="" />,
    field: "Fine Arts",
  },
  {
    id: 12,
    img: <img src={Country7} alt="" />,
    field: "Law",
  },
  {
    id: 13,
    img: <img src={Country7} alt="" />,
    field: "Education",
  },
  {
    id: 14,
    img: <img src={Country7} alt="" />,
    field: "Agriculture and Forestry",
  },
  {
    id: 15,
    img: <img src={Country7} alt="" />,
    field: "Mathematics",
  },
  {
    id: 16,
    img: <img src={Country7} alt="" />,
    field: "Medicine",
  },
];
function FinderTwo() {
  const [selectedfield, setSelectedfield] = useState(null);
  const handleSmallDivCountryClick = (id) => {
    console.log(id);
    const selectedfieldData = data.find((item) => item.id === id);
    sessionStorage.setItem("selectedfield", selectedfieldData.field);
    const obj = {
      id: selectedfieldData.id
    };
    sessionStorage.setItem("selectedTwo", JSON.stringify(obj));
    setSelectedfield(selectedfieldData);
  };

  const handleNextButtonClick = () => {
    if (selectedfield) {
      console.log("Selected field:", selectedfield);
      setSelectedfield(null); // Clear the selected country after storing it in local storage
    } else {
      // Show a message indicating that a country needs to be selected
      alert("Please select a country before proceeding to the next step.");
    }
  };
  
  // Retrieve the stored inputValues from session storage on component mount
  useEffect(() => {
    const englishTest = sessionStorage.getItem("selectedTwo");
    // Convert the stored value back to a number using Number() function
    if (englishTest !== '') {
      setSelectedfield(JSON.parse(englishTest))
    }
  }, []);

  return (
    <>
      <SeperateNavigation />
      <div className="center-global scroll-x-hidden">
        <img src={Air} alt="" className="img-linee12" />
        <img src={Line} alt="" className="img-linee" />
        <div className="div-uni-count">
          <div>
            <h1>779</h1>
            <p style={{ fontWeight: "500" }}>universities</p>
          </div>
          <img src={divLine} alt="" className="hr-line" />
          <div>
            <h1>102220</h1>
            <p style={{ fontWeight: "500" }}>courses</p>
          </div>
        </div>
        <img src={Global} alt="" className="img-linee" />
        <div className="main-container">
          <FinderCard>
            <PreviousFinder
              isHeading={true}
              heading={'What is your preferred area of study?'}
            />
            <div className="div-btn-both12">
              {data.map((item) => (
                <div
                  className={`small-div-country45 ${ selectedfield && selectedfield.id === item.id ? "border-highlight": ""}`}
                        onClick={() => handleSmallDivCountryClick(item.id)}>
                    <div>{item.img}</div>
                    <div>{item.field}</div>
                  </div>
              ))}
            </div>
            <Link to="/finderThree" style={{ textDecoration: "none" }}>
              <button
                className={`btn-next ${selectedfield ? "" : "btn-next:disabled"}`}
                disabled={!selectedfield}
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

export default FinderTwo;
