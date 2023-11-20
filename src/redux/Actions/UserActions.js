import { axiosInstance } from "../../constants/axiosInstance";
import { handleApiError } from "../../constants/helperFunction";
import { ACTION_TYPES } from "../ActionTypes/ActionTypes";
import { userLogin } from "./ProfileActions";
import { selectProgressBarState } from "./ProgressBarActions";

export const sendOTPCode = (phoneNumber, navigate, message, targetUrl, data) => {
  return async (dispatch) => {
    try { 
      await axiosInstance.post("/api/v1/user/sendotp", { phoneNumber: phoneNumber })
        .then((res) => {
          message.success("OTP Send to your Phone No");
          navigate("/otp-verification", {state: {targetUrl, phoneNumber, data}});
        }).catch((err) => {
          const error = handleApiError(err);
          message.error(error.length > 0 ? error[0].message : "Something went wrong");
        })
    } catch (err) {
      
    }
  }
}
export const reSendOTPCode = (phoneNumber, message) => {
  return async (dispatch) => {
    try { 
      await axiosInstance.post("/api/v1/user/sendotp", { phoneNumber: phoneNumber })
        .then((res) => {
          message.success("OTP Send again to your Phone No");
        }).catch((err) => {
          const error = handleApiError(err);
          message.error(error.length > 0 ? error[0].message : "Something went wrong");
        })
    } catch (err) {
      
    }
  }
}

export const verifyOTPCode = (otp, navigate, message, targetUrl, data) => {
  return async (dispatch) => {
    try { 
      await axiosInstance.post("/api/v1/user/verify-otp", {otp} )
        .then(async (res) => {
          dispatch(selectProgressBarState(true));
          if (targetUrl) {
            if (targetUrl === '/finderSeven') {
              const res = await axiosInstance.post("/api/v1/universityFinder/add-university-finder", {
                dataUniversityFinder:  data
              });
              if (res.data.success) {
                  dispatch(selectProgressBarState(false));
                  message.success(res.data.message);
                  sessionStorage.removeItem("selectedCountry");
                  sessionStorage.removeItem("purpose");
                  sessionStorage.removeItem("selectedfield");
                
                  sessionStorage.removeItem("selectededucation");
                  sessionStorage.removeItem("inputValue");
                
                  sessionStorage.removeItem("selectedintake");
                
                  sessionStorage.removeItem("selectedtest1");
                  sessionStorage.removeItem("inputValues");
                
                  sessionStorage.removeItem("selectedtest2");
                  sessionStorage.removeItem("inputValueap");
                  
                  sessionStorage.removeItem("selectedyes");
                  sessionStorage.removeItem("inputValueexper");
                
                  sessionStorage.removeItem("selected");
                  sessionStorage.removeItem("selectedOne");
                  sessionStorage.removeItem("selectedTwo");
                  sessionStorage.removeItem("selectedThree");
                  sessionStorage.removeItem("selectedFour");
                  sessionStorage.removeItem("selectedFive");
                  sessionStorage.removeItem("selectedSix");
                  sessionStorage.removeItem("selectedSeven");
                  navigate("/");
              } else {
                dispatch(selectProgressBarState(false));
                message.error("Something Went Wrong");
              }
            } else if (targetUrl === '/accommodationTwo') {
              const res = await axiosInstance.post("/api/v1/accomodation/add-accomodation", {
                dataAccomodation:  data
              });
              if (res.data.success) {
                  dispatch(selectProgressBarState(false));
                  message.success(res.data.message);
                  sessionStorage.removeItem("selectedAccCountry");
                  sessionStorage.removeItem("selectedAccCity");
                  sessionStorage.removeItem("selectedAccintake");
                  sessionStorage.removeItem("accommodation")
                  sessionStorage.removeItem("accommodationOne")
                  sessionStorage.removeItem("accommodationTwo")
                  navigate("/");
                } else {
                dispatch(selectProgressBarState(false));
                message.error("Something Went Wrong");
              }
            } else {
              const res = await axiosInstance.post("/api/v1/scholarship/add-scholarship", {
                dataScholarship: data
              });
              if (res.data.success) {
                  dispatch(selectProgressBarState(false));
                  message.success(res.data.message);
                  sessionStorage.removeItem("selectedCountries");
                  sessionStorage.removeItem("selectedfields");
                  sessionStorage.removeItem("selectedintakes");
                  sessionStorage.removeItem("purposes");
                  sessionStorage.removeItem("scholarship")
                  sessionStorage.removeItem("scholarshipOne")
                  sessionStorage.removeItem("scholarshipTwo")
                  sessionStorage.removeItem("scholarshipThree")
                  navigate("/");
              } else {
                dispatch(selectProgressBarState(false));
                message.error("Something Went Wrong");
              }
            }

          } else {
            navigate("/");
          }
        }).catch((err) => {
          const error = handleApiError(err);
          message.error(error.length > 0 ? error[0].message : "Something went wrong");
        })
    } catch (err) {
      
    }
  }
}

export const userSignUp = (name, email, password, role ,value, navigate, message, targetUrl, data) => {
  return async (dispatch) => {
    try {  
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.post("/api/v1/user/signup", {
          fullName :  name,
          email,
          password,
          role: role,
          phoneNumber: value,
          contacted: false
      });
      if (res.data.success) {
          setTimeout(() => {
            dispatch(selectProgressBarState(false));
            dispatch(userLogin(res.data.token));
            localStorage.setItem("token", res.data.token);
            if (targetUrl) {
              dispatch(sendOTPCode(value, navigate, message, targetUrl, data));
            } else {
              dispatch(sendOTPCode(value, navigate, message, '/', data));
            }
          },500)
      } else {
        dispatch(selectProgressBarState(false));
        message.error("Something went wrong");
      }
    } catch (err) {
      dispatch(selectProgressBarState(false));
      const error = handleApiError(err);
      message.error(error.length > 0 ? error[0].message : "Something went wrong");
    }
  };
};

export const userSocialSignUp = (name, email,  navigate, message) => {
  return async (dispatch) => {
    try {
      dispatch(selectProgressBarState(true));
      console.log('here')
      const res = await axiosInstance.post("/api/v1/user/usersocialsignup", {
          fullName :  name,
          email,
      });
      if (res.data.success) {
          setTimeout(() => {
            dispatch(userLogin(res.data.data.token));
            localStorage.setItem("token", res.data.data.token);
            message.success(res.data.message.toString());
            dispatch(selectProgressBarState(false));
            navigate("/");
        },500)
      } else {
        dispatch(selectProgressBarState(false));
        message.show("Something Went Wrong");
      }
    } catch (err) {
      const error = handleApiError(err);
      message.error(error.length > 0 ? error[0].message : "Something went wrong");
    }

  };
};

export const userLoginFun = (email, password, navigate, message, targetUrl) => {
  return async (dispatch) => {
    try {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.post("/api/v1/user/login", {
          email,
          password,
      });
      if (res.data.success) {
        setTimeout(() => {
          dispatch(userLogin(res.data.data.token));
          localStorage.setItem("token", res.data.data.token);
          message.success(res.data.message.toString());
          dispatch(selectProgressBarState(false));
          console.log(targetUrl)
          if (targetUrl) {
            navigate(targetUrl);
          } else {
            navigate("/");
          }
        },500)
      } else{
        dispatch(selectProgressBarState(false));
        message.error(res.data.message.toString());
      }
    } catch (err){
      const error = handleApiError(err);
      message.error(error.length > 0 ? error[0].message : "Something went wrong");
    }
  };
};

export const resetPassword = (email,  navigate, message) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.patch("/api/v1/user/forgetpassword", {
        email,
    });
    if (res.data.success) {
        setTimeout(() => {
            message.success("Email Successfully Send");
            dispatch(selectProgressBarState(false));
            navigate("/reset-password");
        },500)
    } else {
        dispatch(selectProgressBarState(false));
        message.error("Something Went Wrong");
    }
  };
};

export const verifyJWTToken = (token, message) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.patch("/api/v1/user/verifyjwttoken", {
        token,
    });
      if (res.data.success) {
          dispatch(selectProgressBarState(false));
          const userId = res.data.data;
          global.userId = userId;
    } else {
        dispatch(selectProgressBarState(false));
        global.verify = false;
        message.error("Something Went Wrong");
    }
  };
};

export const updatePassword = (password, id,  navigate, message) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.patch("/api/v1/user/updatepassword", {
        password,
        id
    });
      if (res.data.success) {
          setTimeout(() => {
            message.success(res.data.message.toString());
            dispatch(selectProgressBarState(false));
            navigate("/login");
        },500)
    } else {
        dispatch(selectProgressBarState(false));
        message.error("Something Went Wrong");
    }
  };
};

export const changeUserPassword = (password, navigate, alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.patch("/api/v1/user/changeUserPassword", {
        password
    }, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    });
      if (res.data.success) {
          setTimeout(() => {
              alert.show('Password Succesfully Changed');
                dispatch(selectProgressBarState(false));
        },500)
    } else {
        dispatch(selectProgressBarState(false));
        alert.show("Something Went Wrong");
    }
  };
};

export const updateUser = (formData, values, alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    console.log(formData, 'EBJHB')
    const res = await axiosInstance.patch("/api/v1/user/updateuser", formData, {
      headers: {
        "Authorization": localStorage.getItem('token'),
        "Content-Type": "multipart/form-data",
      },
      params: {
        values : JSON.stringify(values)
      }
    });
      if (res.data.success) {
          setTimeout(() => {
            alert.show('Update Information Successfully');
            dispatch(selectProgressBarState(false));
        },500)
    } else {
        dispatch(selectProgressBarState(false));
        alert.show("Something Went Wrong");
    }
  };
};

export const getSingleUser = (navigate, alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    try {
      const res = await axiosInstance.get("/api/v1/user/getsingleuser");
      if (res.data.success) {
        dispatch(selectProgressBarState(false));
          dispatch({
            type: ACTION_TYPES.GET_SINGLE_USER,
            payload: res.data.data,
          });
      } else {
          dispatch(selectProgressBarState(false));
          dispatch({
            type: ACTION_TYPES.GET_SINGLE_USER,
            payload: {},
          });
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        dispatch({
          type: ACTION_TYPES.GET_SINGLE_USER,
          payload: {},
        });
      } else {
        console.error(error);
      }
    }
    
  };
};

export const sendContactUsMessage = (fullName, email, phone, message, navigate, alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    console.log(phone)
    const res = await axiosInstance.post("/api/v1/contacts/sendcontactmail", {
      fullName,
      emailId :email,
      phoneNumber : phone,
      message
    });
    if (res.data.success) {
      dispatch(selectProgressBarState(false));
        alert.show("Message Send Successfully");
    } else {
        dispatch(selectProgressBarState(false));
        alert.show(res.data.message.toString());
    }
  };
};