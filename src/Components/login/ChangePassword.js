import React, { useState } from "react";
import "./login.css";
import { BackgroundGradiant } from "./BackgroundGradient";
import { LoginHeadings } from "./LoginHeading";
import { LoginCard } from "./LoginCard";
import InputField from "../fields/InputField";
import { SeperateNavigation } from "../seperate-nav/SeperateNavigation";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updatePassword, verifyJWTToken } from "../../redux/Actions/UserActions";
import { useDispatch} from "react-redux";
import { message } from "antd";
import { useEffect } from "react";


function ChangePassword() {

  let navigate = useNavigate();
  let dispatch = useDispatch();
  const params = useParams();

//   const loading = useSelector(
//       (state) => state.ProgressBarReducer
//   );

  const [credentials, setcredentials] = useState({
      password: "",
      cpassword: ""
  });


  useEffect(() => {
      const token = params.token;
      dispatch(verifyJWTToken(token, message))
  }, []);

  const handleSubmit = async (e) => {
      e.preventDefault();
      const { password, cpassword } = credentials;
      if (password !== cpassword) {
          alert.show("Password does not Match")
      } else { 
          dispatch(updatePassword(password, global.userId, navigate, message));
      }
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
                    loginDescription="Enter your New Password"
                />
                <div className="div-c">
                      <LoginCard>
                          <div>
                              <form onSubmit={handleSubmit}>
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
                                <InputField
                                    variant="auth"
                                    extra="mb-3"
                                    label="Confirm Password*"
                                    placeholder="Min. 8 characters"
                                    required={true}
                                    id="cpassword"
                                    type="password"
                                    value={credentials.cpassword}
                                    onChange={onChange}
                                />
                                <div className="mb-4">
                                    <button type="submit"
                                        className="btn-next w-100 mt-0 rounded">
                                        Reset
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

export default ChangePassword;
