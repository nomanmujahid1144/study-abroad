import React, { useState } from "react";
import {
  message,
} from "antd";
import "./style.css";
import { SeperateNavigation } from "../../Components/seperate-nav/SeperateNavigation";
import { BackgroundGradiant } from "../../Components/login/BackgroundGradient";
import { LoginHeadings } from "../../Components/login/LoginHeading";
import { LoginCard } from "../../Components/login/LoginCard";
import { useLocation, useNavigate } from "react-router-dom";
import { OtpValication } from "../../constants/helperFunction";
import OtpInput from "react18-input-otp";
import { reSendOTPCode, verifyOTPCode } from "../../redux/Actions/UserActions";
import { useDispatch } from "react-redux";

function sendOtp() {

  const [otp, setOtp] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  
  const targetUrl = location.state && location.state.targetUrl;
  const phoneNumber = location.state && location.state.phoneNumber;
  const data = location.state && location.state.data;

  console.log(phoneNumber)
  console.log(data)

  const handleEmailVerification = async () => {
    if (!otp || otp.length !== 6) {
      return message.error('Valid Otp required');
    } else {
      dispatch(verifyOTPCode(otp , navigate, message, targetUrl, data));
    }
  };

  const handleResendOtp = () => {
    dispatch(reSendOTPCode(phoneNumber, message))
  }


  const handleOTPChange = (newOtp) => {
    const convertedOtp = OtpValication(newOtp);
    setOtp(convertedOtp);
  };

  return (
    <>
      <SeperateNavigation
              position="absolute"
      />
      <BackgroundGradiant>
        <div>
          <LoginHeadings
            loginHeading="Enter Verification Code"
            loginDescription="We send you on phone."
          />
          <div className="div-c">
            <LoginCard>
              <div className="">
                <OtpInput
                  value={otp}
                  onChange={handleOTPChange}
                  numInputs={6}
                  containerStyle={{ justifyContent: 'space-between' }}
                  inputStyle={{
                    width: '100%',
                    margin: '8px',
                    padding: '10px',
                    border: `1px solid rgb(217, 217, 217)`,
                    borderRadius: 4,
                  }}
                  focusStyle={{
                    outline: 'none',
                    boxShadow: `rgba(22, 119, 255, 0.2) 0px 0px 0px 2px`,
                    border: `1px solid rgb(217, 217, 217)`
                  }}
                />
                <div className="d-flex justify-content-between">
                  <p className="plsht">
                    Did not receive the code? {" "}
                  </p>
                  <p onClick={handleResendOtp} className="plsht links cursor-pointer" style={{ fontWeight: "bold" }}>
                    Resend code
                    {/* <Countdown value={Date.now() + 10 * 12000} onChange={onChange} /> */}
                  </p>
                </div>
                <div className="mb-4">
                  <button
                    style={{width: '100%'}}
                    onClick={handleEmailVerification}
                    disabled={otp === undefined || otp.length !== 6 ? true : false}
                    type="submit"
                    className="btn-next w-100 mt-0 rounded"
                  >
                        Register
                    </button>
                </div>
              </div>
            </LoginCard>
          </div>
        </div>
      </BackgroundGradiant>
    </>
  );
}

export default sendOtp;
