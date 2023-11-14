import React, { useState} from "react";
import "./style.css";
import Hand from "../../images/Untitled design (20) 1.png";
import Ring from "../../images/Group 1000004381.png";
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
import { Col, Row } from "antd";
import { PreviousFinder } from "../finderCard/FinderPrevious";
import { FinderCard } from "../finderCard/finderCardBG";
import { BackgroundGradiant } from "../login/BackgroundGradient";
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

function ScholarshipsTwo() {

  const [selectedfields, setSelectedfields] = useState(null);

  const handleSmallDivCountryClick = (id) => {
    const selectedfieldsData = data.find((item) => item.id === id);
    sessionStorage.setItem("selectedfields", selectedfieldsData.field);
    const obj = {
      id: selectedfieldsData.id
    };
    sessionStorage.setItem("scholarshipTwo", JSON.stringify(obj));
    setSelectedfields(selectedfieldsData);
  };

  const handleNextButtonClick = () => {
    if (selectedfields) {
      setSelectedfields(null); // Clear the selected country after storing it in local storage
    } else {
      // Show a message indicating that a country needs to be selected
      alert("Please select a country before proceeding to the next step.");
    }
  };

    // Retrieve the stored inputValues from session storage on component mount
    React.useEffect(() => {
      const englishTest = sessionStorage.getItem("scholarshipTwo");
      // Convert the stored value back to a number using Number() function
      if (englishTest !== '') {
        setSelectedfields(JSON.parse(englishTest))
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
                  heading={'what is your preferred area of study?'}
                />
                <div className="div-btn-both12 ">
                  {data.map((item) => (
                    <div className={`small-div-country45 ${ selectedfields && selectedfields.id === item.id ? "border-highlight": ""}`} 
                      onClick={() => handleSmallDivCountryClick(item.id)} >
                      <div>{item.img}</div>
                      <div>{item.field}</div>
                    </div>
                  ))}
                </div>
                <Link to="/scholarshipsThree" style={{ textDecoration: "none" }}>
                  <button
                    className={`btn-next ${
                      selectedfields ? "" : "btn-next:disabled"
                    }`}
                    disabled={!selectedfields}
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

export default ScholarshipsTwo;
