import React from "react";
import "./style.css";
import { Col, Row} from "antd";
import Idea from "../../images/image 22 (1).png";
import Arrow from "../../images/span.jss107.png";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { FinderCard } from "../finderCard/finderCardBG";
import { PreviousFinder } from "../finderCard/FinderPrevious";

function VisaExpertModal() {

  const [value, setValue] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Received values of form: ", value);
  };


  return (
    <div>
      <div>
        <Row justify="space-between">
          <Col>
            <div className="center-modal">
              <div>
                <h1 className="text-modal">
                  “Find the best <br /> courses and
                  <br /> universities”
                </h1>
              </div>
            </div>
          </Col>
          <Col>
            <div className="center-modal">
              <div>
                <img src={Idea} alt="" />
                <button className="stuyd-modal-btn">Visa EXPERT</button>
              </div>
            </div>
          </Col>
        </Row>
        <div
          className="center-token-div-whole"
          style={{ marginTop: "-.05rem" }}
        >
          
          <FinderCard>
            <PreviousFinder
              isHeading={false}
              heading={`Talk to Visa Expert`}
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
            <p className="text-by-term">
              By continuing, you agree to our{" "}
              <a href="/" className="text-by-term1">Terms of Service & Privacy policy</a>
            </p>
          </FinderCard>
        </div>
      </div>
    </div>
  );
}

export default VisaExpertModal;
