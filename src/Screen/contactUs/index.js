import React from "react";
import { Col, Row} from "antd";
import "./style.css";
import SMS from "../../images/sms.png";
import Phone from "../../images/call-calling.png";
import Location from "../../images/location.png";
import { BackgroundGradiant } from "../../Components/login/BackgroundGradient";
import { LoginHeadings } from "../../Components/login/LoginHeading";
import InputField from "../../Components/fields/InputField";
import TextareaField from '../../Components/fields/TextareaField';
import PhoneInput from 'react-phone-number-input';
import { useState } from "react";
import { ContactCard } from "../../Components/login/ContactCard";


function ContactUs() {

  
  const [value, setValue] = useState();


  

  return (
    <BackgroundGradiant>
      <div>
        <LoginHeadings
            loginHeading="Contact us"
            loginDescription="Our friendly team would love to hear from you."
        />
        <div className="div-c">
          <ContactCard>
            <Row justify="center">
              <Col xl={12} lg={12} md={12} xs={24}>
                <div className="contact-col">
                  <div className="w-100">
                    <form >
                      {/* <div className="div-form-input" style={{gap: '5px'}}> */}
                        <InputField
                            variant="auth"
                            extra="mb-3"
                            label="Full Name*"
                            placeholder="Syed Asif"
                            required={true}
                            id="fullName"
                            type="text"
                            // value={credentials.fullName}
                            // onChange={onChange}
                        />
                        <InputField
                            variant="auth"
                            extra="mb-3"
                            label="Email*"
                            placeholder="asif@gmail.com"
                            required={true}
                            id="email"
                            type="email"
                            // value={credentials.fullName}
                            // onChange={onChange}
                        />
                      {/* </div> */}
                      <label className={`ml-3 mb-1 text-md text-navy-700 dark:text-white`}>
                          Enter Phone Number
                      </label>
                      <PhoneInput
                          isValidPhoneNumber={true}
                          limitMaxLength={true}
                          className="form-control d-flex mt-0 mb-4 border border-gray-300"
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
                      <TextareaField
                        label="Your Message*"
                        id="textarea-id"
                        placeholder="Enter your message here"
                        variant="auth"
                        extra="mb-3"
                        required={true}
                        type="text"
                          // value={credentials.fullName}
                          // onChange={onChange}
                      />
                      <div className="mb-4">
                          <button type="submit"
                              className="btn-next w-100 mt-0 rounded">
                              Send Message
                          </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Col>
              <Col xl={12} lg={12} md={12} xs={24}>
                <div className="contact-col">
                  <div>
                    <div>
                      <img src={SMS} alt="" style={{ marginBottom: ".5rem" }} />
                      <p className="text-mail">Email</p>
                      <p className="text-mail1">
                        Our friendly team is here to help.
                      </p>
                      <p className="txt-phone">
                        <a class="mail-to" href="mailto:help@learnwithfraternity.com">help@learnwithfraternity.com</a>
                      </p>
                    </div>
                    <div>
                      <img
                        src={Phone}
                        alt=""
                        style={{ marginBottom: ".5rem" }}
                      />
                      <p className="text-mail">Phone</p>
                      <p className="text-mail1">Mon-Fri from 8am to 5pm.</p>
                      <p className="txt-phone"><a href="tel:+919318325049">9318325049</a></p>
                    </div>
                    <div>
                      <img
                        src={Location}
                        alt=""
                        style={{ marginBottom: ".5rem" }}
                      />
                      <p className="text-mail">Office</p>
                      <p className="text-mail1">
                        Learn With Fraternity Pvt. Ltd. D-62, Noida, Sector 2
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </ContactCard>
        </div>
      </div>
    </BackgroundGradiant>
  );
}

export default ContactUs;
