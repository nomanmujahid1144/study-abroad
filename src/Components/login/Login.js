import React, { useState } from "react";
import "./login.css";
import { BackgroundGradiant } from "./BackgroundGradient";
import { LoginHeadings } from "./LoginHeading";
import { LoginCard } from "./LoginCard";
import InputField from "../fields/InputField";
import 'react-phone-number-input/style.css';
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";
import { userLoginFun, userSocialSignUp } from "../../redux/Actions/UserActions";
import { useDispatch } from "react-redux";
import { SignInWithGoogle } from "./SignInWithGoogle";


function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const targetUrl = location.state && location.state.targetUrl;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    dispatch(userLoginFun(email, password, navigate, message, targetUrl));
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleGoogleCredentials = async (Auths) => {
    const { name, email} = Auths;
    dispatch(userSocialSignUp(name, email, navigate, message));
}

  return (
    <>
          <SeperateNavigation
              position="absolute"
          />
          <BackgroundGradiant>
            <div>
                <LoginHeadings
                    loginHeading="Login to your account"
                    loginDescription="Welcome Back! Please enter your details"
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
                                <div className="d-flex my-2 justify-content-end">
                                  {/* <Checkbox onChange={onChange}>Remember </Checkbox> */}
                                  <Link to="/reset-password">Forgot Password</Link>
                                </div>
                                <div className="mb-4">
                                    <button type="submit"
                                        style={{width: '100% !important'}}
                                        className="btn-next w-100 mt-0 rounded">
                                        Login
                                    </button>
                                </div>
                                </form>
                            <div className="centerdisp">
                            <SignInWithGoogle
                                getCredentials={handleGoogleCredentials}
                            />
                            </div>
                              <p className="acc">
                                Don't have an account?
                                <Link to="/sign-up">{" "}Sign Up</Link>
                              </p>
                          </div>
                      </LoginCard>
                  </div>
              </div>
          </BackgroundGradiant>
    </>
  );
}

export default Login;
