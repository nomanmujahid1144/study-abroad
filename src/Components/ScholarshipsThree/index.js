import React, { useState, useEffect } from "react";
import "./style.css";
import Hand from "../../images/Untitled design (20) 1.png";
import Ring from "../../images/Group 1000004381.png";
import Country6 from "../../images/SVG (14).png";
import Country7 from "../../images/SVG (15).png";
import Arrow from "../../images/span.jss107.png";
import { Col, Row, message } from "antd";
import { useNavigate } from "react-router-dom";
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";
import { BackgroundGradiant } from "../login/BackgroundGradient";
import { FinderCard } from "../finderCard/finderCardBG";
import { PreviousFinder } from "../finderCard/FinderPrevious";
import { addScholarship } from "../../redux/Actions/SchlarshipAction";
import { useDispatch } from "react-redux";

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
function ScholarshipsThree() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const targetUrl = window.location.pathname + window.location.search;

  const [selectedintakes, setSelectedintakes] = useState(null);
  const [dataScholarship, setData] = useState({});

  useEffect(() => {
    setData({
      country: sessionStorage.getItem("selectedCountries"),
      degree: sessionStorage.getItem("purposes"),
      field: sessionStorage.getItem("selectedfields"),
      intake: sessionStorage.getItem("selectedintakes"),
    })
  },[selectedintakes])

  const handleSmallDivCountryClick = (id) => {
    const selectedintakesData = data.find((item) => item.id === id);
    sessionStorage.setItem("selectedintakes", selectedintakesData.intake);
    const obj = {
      id: selectedintakesData.id
    };
    sessionStorage.setItem("scholarshipThree", JSON.stringify(obj));
    setSelectedintakes(selectedintakesData);
  };

  const handleNextButtonClick = () => {
    if (selectedintakes) {
      dispatch(addScholarship(dataScholarship, navigate, message, targetUrl));
      setSelectedintakes(null); // Clear the selected country after storing it in local storage
    } else {
      // Show a message indicating that a country needs to be selected
      alert("Please select a country before proceeding to the next step.");
    }
  };

    // Retrieve the stored inputValues from session storage on component mount
    React.useEffect(() => {
      const englishTest = sessionStorage.getItem("scholarshipThree");
      // Convert the stored value back to a number using Number() function
      if (englishTest !== '') {
        setSelectedintakes(JSON.parse(englishTest))
      }
    }, []);  

  // const createCourse = (values) => {
  //   setLoading(true);
  //   const data = {
  //     country: storedItem,
  //     field: storedItem1,
  //     intake: storedItem2,
  //     purpose: storedItem3,
  //   };

  //   course({
  //     method: "post",
  //     data: data,
  //   })
  //     .then((res) => {
  //       setLoading(false);
  //       console.log(res.data.user, "api");
        // sessionStorage.removeItem("selectedCountries");
        // sessionStorage.removeItem("selectedfields");
        // sessionStorage.removeItem("selectedintakes");
        // sessionStorage.removeItem("purposes");
  //       message.success("API call successful!");
  //       // Do something after successful API call (e.g., navigate to another page)
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       // Handle error if the API call fails
  //       message.error("API call failed."); // Show error messages
  //     });
  // };

  
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
                  heading={'What is your preferred intake?'}
                />
                <div className="div-btn-both12 d-flex justify-content-center w-50 gap-3">
                  {data.map((item) => (
                    <div className={`small-div-country  ${ selectedintakes && selectedintakes.id === item.id ? "border-highlight" : "" }`}
                      onClick={() => handleSmallDivCountryClick(item.id)}>
                      <div>{item.img}</div>
                      <div>{item.intake}</div>
                    </div>
                  ))}
                </div>
                  <button
                    className={`btn-next ${
                      selectedintakes ? "" : "btn-next:disabled"
                    }`}
                    disabled={!selectedintakes}
                    onClick={handleNextButtonClick}
                  >
                    Submit <img src={Arrow} alt="" className="im-size" />
                  </button>
              </FinderCard>
            </div>
          </div>
        </div>
      </BackgroundGradiant>
    </>
  );
}

export default ScholarshipsThree;
