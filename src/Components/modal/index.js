import React, { useState } from "react";
import "./style.css";
import { Col, Row, Select, message } from "antd";
import Idea from "../../images/image 21.webp";
// import Country from "../../images/image 18 (1).png";
import Arrow from "../../images/span.jss107.webp";
// import { Link } from "react-router-dom";
import { FinderCard } from "../finderCard/finderCardBG";
import { PreviousFinder } from "../finderCard/FinderPrevious";
import InputField from "../fields/InputField";
import PhoneInput from "react-phone-number-input";
import { useDispatch } from "react-redux";
import { newFormSubmission } from "../../redux/Actions/FormSubmissionAction";
// const { Option } = Select;
function ExpertModal({handleCloseModal}) {

  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [credentials, setcredentials] = useState({
    fullName: "",
  });

  const handleSubmit = async (e) => {
      e.preventDefault();
      const { fullName} = credentials;
    dispatch(newFormSubmission(fullName, value, "For Real Guide", message, 'Form Submitted Successfully')).then(() => {
      handleCloseModal();
      setcredentials({
        fullName: "",
      })
      setValue()
    });
  };

  const onChange = (e) => {
      setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  return (
    <div>
      <div>
        <Row justify="space-between">
          <Col>
            <div className="center-modal">
              <div>
                <h2 className="text-modal">
                  “Find the best <br /> courses and
                  <br /> universities”
                </h2>
              </div>
            </div>
          </Col>
          <Col>
            <div className="center-modal">
              <div>
                <img src={Idea} alt="" />
                <button className="stuyd-modal-btn">STUDY ABROAD EXPERT</button>
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
            <form onSubmit={handleSubmit} className="text-center">
                <InputField
                    variant="auth"
                    extra="mb-3"
                    // label="Your Name*"
                    placeholder="Enter Your Name"
                    required={true}
                    id="fullName"
                    type="text"
                    value={credentials.fullName}
                    onChange={onChange}
                />
                <PhoneInput
                  isValidPhoneNumber={true}
                  limitMaxLength={true}
                  className="form-control d-flex border-0 border-gray-300"
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
              <button className="btn-next " type="submit">
                Submit <img src={Arrow} alt="" className="im-size" />
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

export default ExpertModal;
