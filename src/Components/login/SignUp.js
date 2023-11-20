import React, { useState } from "react";
import "./login.css";
import { BackgroundGradiant } from "./BackgroundGradient";
import { LoginHeadings } from "./LoginHeading";
import { LoginCard } from "./LoginCard";
import InputField from "../fields/InputField";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";
import { useLocation, useNavigate } from "react-router-dom";
import { userSignUp} from "../../redux/Actions/UserActions";
import { useDispatch } from "react-redux";
import { message } from "antd";


function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [value, setValue] = useState();
    const [credentials, setcredentials] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    
    const targetUrl = location.state && location.state.targetUrl;
    const data = location.state && location.state.data;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, email, password } = credentials;
        
        dispatch(userSignUp(fullName, email, password,{user: true} , value, navigate, message, targetUrl, data));
    };

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    // const handleGoogleCredentials = async (Auths) => {
    //     const { name, email, picture } = Auths;
    //     dispatch(userSocialSignUp(name, email, navigate, message));
    // }

  return (
    <>
          <SeperateNavigation
              position="absolute"
          />
          <BackgroundGradiant>
            <div>
                <LoginHeadings
                    loginHeading="Sign Up to your account"
                    loginDescription="Welcome Back! Please enter your details"
                />
                <div className="div-c">
                      <LoginCard>
                          <div>
                            <form onSubmit={handleSubmit}>
                                <InputField
                                    variant="auth"
                                    extra="mb-3"
                                    label="Full Name*"
                                    placeholder="Full Name"
                                    required={true}
                                    id="fullName"
                                    type="text"
                                    value={credentials.fullName}
                                    onChange={onChange}
                                />
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
                                <InputField
                                    variant="auth"
                                    extra="mb-3"
                                    label="Password*"
                                    placeholder="Min. 8 characters"
                                    required={true}
                                    id="password"
                                    type="password"
                                    value={credentials.password}
                                    onChange={onChange}
                                />
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
                                <div className="mb-4">
                                      <button type="submit"
                                        style={{width: '100% !important'}}
                                        className="btn-next w-100 mt-0 rounded">
                                        Register
                                    </button>
                                </div>
                            </form>
                            {/* <div className="centerdisp">
                            <SignInWithGoogle
                                getCredentials={handleGoogleCredentials}
                            />
                            </div> */}
                              {/* <p className="acc">
                                  Already have an account?
                                  <Link to={adminURL}>{" "}Login</Link>
                              </p> */}
                          </div>
                      </LoginCard>
                  </div>
              </div>
          </BackgroundGradiant>
    </>
  );
}

export default Signup;
