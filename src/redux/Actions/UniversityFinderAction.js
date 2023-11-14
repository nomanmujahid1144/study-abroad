import { axiosInstance } from "../../constants/axiosInstance";
import { selectProgressBarState } from "./ProgressBarActions";
import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

export const addUniversityFounder = (dataUniversityFinder, navigate, message, targetUrl) => {
  return async (dispatch) => {
    try {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.post("/api/v1/universityFinder/add-university-finder", {
        dataUniversityFinder
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
    } catch (err) {
      dispatch(selectProgressBarState(false));
      message.error('Please Sign up first');
      navigate("/sign-up", { state: { targetUrl, data: dataUniversityFinder } });
    }
  };
};

export const getUniversityFinders = () => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get("/api/v1/universityFinder/get-university-finder");
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_UNIVERSITY_FINDERS,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_UNIVERSITY_FINDERS,
        payload: [],
      });
    }
  };
};
