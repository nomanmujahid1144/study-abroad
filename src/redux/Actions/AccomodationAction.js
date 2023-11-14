import { axiosInstance } from "../../constants/axiosInstance";
import { selectProgressBarState } from "./ProgressBarActions";
import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

export const addAccomodation = (dataAccomodation, navigate, message, targetUrl) => {
  return async (dispatch) => {
    try {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.post("/api/v1/accomodation/add-accomodation", {
        dataAccomodation
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
    } catch (err) {
      dispatch(selectProgressBarState(false));
      message.error('Please Sign up first');
      navigate("/sign-up", { state: { targetUrl, data:  dataAccomodation} });
    }
  };
};

export const getAccomodations = () => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get("/api/v1/accomodation/get-accomodations");
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ACCOMODATIONS,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ACCOMODATIONS,
        payload: [],
      });
    }
  };
};
