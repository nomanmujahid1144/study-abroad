import React, { useState } from "react";
// import "./style.css";
import Global from "../../images/Huge Global.png";
import Arrow from "../../images/span.jss107.png";
import { FinderCard } from "../finderCard/finderCardBG";
import { PreviousFinder } from "../finderCard/FinderPrevious";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";

function FinderEight() {

  
  const [value, setValue] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <SeperateNavigation />
      <div className="center-global scroll-x-hidden">
        <img src={Global} alt="" className="img-linee" />
        <br />
        <div className="main-container">
          <FinderCard>
            <PreviousFinder
              isHeading={false}
              heading={`Let's get started`}
            />
            <form onSubmit={onSubmit} className="text-center">
              <div>
                <PhoneInput
                  isValidPhoneNumber={true}
                  limitMaxLength={true}
                  className="form-control d-flex border border-gray-300"
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
            </form>
          </FinderCard>
        </div>
      </div>
    </div>
  );
}

export default FinderEight;
