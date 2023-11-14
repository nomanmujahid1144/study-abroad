import React from "react";
import "./style.css";
import Hand from "../../images/Untitled design (21) 1.png";
import Ring from "../../images/Group 1000004381.png";
import Arrow from "../../images/span.jss107.png";
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";
import { BackgroundGradiant } from "../login/BackgroundGradient";
import { FinderCard } from "../finderCard/finderCardBG";
import { PreviousFinder } from "../finderCard/FinderPrevious";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useState } from "react";

function AccommodationThree() {
  const [value, setValue] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <SeperateNavigation
        position={"absolute"}
    />
    <BackgroundGradiant height="auto" >
      <div className="whole-div-findd">
          <div>
            <div className="d-flex justify-content-between mb-5">
              <div className="center-find m-0">
                <div>
                  <img src={Ring} alt="" className="ring-img" />
                  <h1 className="finetext-new">
                    “Find your <br /> Accommodation <br /> near{" "}
                    <a href="/" className="finetext-new1">Top Universities</a> <br />{" "}
                    across the Globe”
                  </h1>
                </div>
              </div>
              <div className="center-find12">
                  <img src={Hand} alt="" className="h-75 div-img-hand22" />
              </div>
            </div>
          {/* <Row justify="center">
            <Col xxl={12} xl={12} lg={12} md={10}>
              <div className="center-find">
                <div>
                  <img src={Ring} alt="" className="ring-img" />
                  <h1 className="finetext-new">
                    “Find your <br /> Accommodation <br /> near{" "}
                    <a href="/" className="finetext-new1">Top Universities</a> <br />{" "}
                    across the Globe”
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
          </Row> */}
          {/* <div>
            <img src={Plane} alt="" className="plane-img" />
            <p className="text-where-text">where do you want to study?</p>
          </div> */}
          <div className="main-container">
            <FinderCard>
              <PreviousFinder
                margintop="2rem"
                isHeading={false}
                heading={`Let's get started`}
              />
              <form onSubmit={onSubmit} className="text-center">
                <div className="d-flex justify-content-center">
                  <PhoneInput
                    isValidPhoneNumber={true}
                    limitMaxLength={true}
                    className="form-control d-flex w-75 mt-0 mb-2 border border-gray-300 text-sm"
                    international
                    initialValueFormat="international"
                    countryCallingCodeEditable={false} 
                    defaultCountry="IN"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    displayInitialValueAsLocalNumber
                  />
                </div>
                <button className="btn-next " type="submit">
                  Continue <img src={Arrow} alt="" className="im-size" />
                </button>
                <p className="text-by-term">
                  By continuing, you agree to our{" "}
                  <a href="/" className="text-by-term1">Terms of Service & Privacy policy</a>
                </p>
              </form>
            </FinderCard>
          </div>
        </div>
      </div>
    </BackgroundGradiant>
  </>
  );
}

export default AccommodationThree;
