import { axiosInstance } from "../../constants/axiosInstance";
import { selectProgressBarState } from "./ProgressBarActions";
import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

export const addScholarship = (dataScholarship, navigate, message, targetUrl) => {
  return async (dispatch) => {
    try {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.post("/api/v1/scholarship/add-scholarship", {
        dataScholarship
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
    } catch (err) {
      dispatch(selectProgressBarState(false));
      message.error('Please Sign up first');
      navigate("/sign-up", { state: { targetUrl , data: dataScholarship} });
    }
  };
};

export const getScholarships = () => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get("/api/v1/scholarship/get-scholarships");
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_SCHOLARSHIPS,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_SCHOLARSHIPS,
        payload: [],
      });
    }
  };
};
