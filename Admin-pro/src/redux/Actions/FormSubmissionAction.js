import { axiosInstance } from '../../constants/axiosInstance';
import { handleApiError } from '../../constants/helperFunction';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { selectProgressBarState } from './ProgressBarActions';

export const updateFormSubmissionToContacted = (id, alert) => {
  return async (dispatch) => {
    try {
      console.log(id);
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.patch(
        '/api/v1/formsubmission/update-form-to-contacted',
        { id },
      );
      if (res.data.success) {
        dispatch(selectProgressBarState(false));
        alert.show(res.data.message);
      } else {
        dispatch(selectProgressBarState(false));
        alert.show('Something Went Wrong');
      }
    } catch (err) {
      const error = handleApiError(err);
      alert.show(error.length > 0 ? error[0].message : 'Something went wrong');
    }
  };
};

export const getAllContactedFormSubmissions = (navigate, alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    try {
      const res = await axiosInstance.get(
        '/api/v1/formsubmission/get-contacted-forms',
      );
      if (res.data.success) {
        dispatch(selectProgressBarState(false));
        dispatch({
          type: ACTION_TYPES.GET_ALL_CONTACTED_FORM_SUBMISSION,
          payload: res.data.data,
        });
      } else {
        dispatch(selectProgressBarState(false));
        dispatch({
          type: ACTION_TYPES.GET_ALL_CONTACTED_FORM_SUBMISSION,
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
export const getAllUNContactedFormSubmissions = (navigate, alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    try {
      const res = await axiosInstance.get(
        '/api/v1/formsubmission/get-uncontacted-forms',
      );
      if (res.data.success) {
        dispatch(selectProgressBarState(false));
        dispatch({
          type: ACTION_TYPES.GET_ALL_UNCONTACTED_FORM_SUBMISSION,
          payload: res.data.data,
        });
      } else {
        dispatch(selectProgressBarState(false));
        dispatch({
          type: ACTION_TYPES.GET_ALL_UNCONTACTED_FORM_SUBMISSION,
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
