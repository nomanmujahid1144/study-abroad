import { axiosInstance } from "../../constants/axiosInstance";
import { handleApiError } from "../../constants/helperFunction";
import { ACTION_TYPES } from "../ActionTypes/ActionTypes";
import { selectProgressBarState } from "./ProgressBarActions";


export const newFormSubmission = (fullName, phoneNumber, formType, message, msg) => {
  return async (dispatch) => {
    try {  
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.post("/api/v1/formsubmission/add-forms", {
        fullName, phoneNumber, formType
      });
      if (res.data.success) {
          setTimeout(() => {
            dispatch(selectProgressBarState(false));
            dispatch({
                type: ACTION_TYPES.ADD_NEW_FORM_SUBMISSION,
                payload: res.data.data,
            });
            message.success(msg)
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