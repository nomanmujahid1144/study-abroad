import React, { useState } from "react";
import "./login.css";
import { BackgroundGradiant } from "./BackgroundGradient";
import { LoginHeadings } from "./LoginHeading";
import { LoginCard } from "./LoginCard";
import InputField from "../fields/InputField";
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword } from "../../redux/Actions/UserActions";
import { useDispatch } from "react-redux";
import { message } from "antd";


function ForgetPassword() {

  let navigate = useNavigate();
  let dispatch = useDispatch();
  
  const [credentials, setcredentials] = useState({
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = credentials;
    console.log(email)
    dispatch(resetPassword(email, navigate, message));
    // dispatch(userLoginFun(email, password, navigate, alert, targetUrl));
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
          <SeperateNavigation
              position="absolute"
          />
          <BackgroundGradiant>
            <div>
                <LoginHeadings
                    loginHeading="Reset Password"
                    loginDescription="Enter your Email to reset your password"
                />
                <div className="div-c">
                      <LoginCard>
                          <div>
                              <form onSubmit={handleSubmit}>
                                <InputField
                                    variant="auth"
                                    extra="mb-3"
                                    label="Email Address*"
                                    placeholder="mail@example.com"
                                    required={true}
                                    id="email"
                                    type="email"
                                    value={credentials.email}
                                    onChange={onChange}
                                />
                                <div className="mb-4">
                                    <button type="submit"
                                        className="btn-next w-100 mt-0 rounded">
                                        Reset Password
                                    </button>
                                </div>
                              </form>
                              <p className="acc">
                                Remember your password ?
                                <Link to="/login">{" "}Login</Link>
                              </p>
                          </div>
                      </LoginCard>
                  </div>
              </div>
          </BackgroundGradiant>
    </>
  );
}

export default ForgetPassword;
