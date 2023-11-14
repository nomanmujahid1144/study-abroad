import { axiosInstance } from '../../constants/axiosInstance';
import { selectProgressBarState } from './ProgressBarActions';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { handleApiError } from '../../constants/helperFunction';

export const addAccomodation = (
  dataAccomodation,
  navigate,
  message,
  targetUrl,
) => {
  return async (dispatch) => {
    try {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.post(
        '/api/v1/accomodation/add-accomodation',
        {
          dataAccomodation,
        },
      );
      if (res.data.success) {
        dispatch(selectProgressBarState(false));
        message.success(res.data.message);
        navigate('/profile');
        sessionStorage.removeItem('selectedAccCountry');
        sessionStorage.removeItem('selectedAccCity');
        sessionStorage.removeItem('selectedAccintake');
      } else {
        dispatch(selectProgressBarState(false));
        message.error('Something Went Wrong');
      }
    } catch (err) {
      dispatch(selectProgressBarState(false));
      message.error('Please Sign in first');
      navigate('/login', { state: { targetUrl } });
    }
  };
};

export const updateAccomodation = (
  dataAccomodation,
  formData,
  id,
  alert,
  onClose,
) => {
  return async (dispatch) => {
    try {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.patch(
        '/api/v1/accomodation/update-accomodation',
        formData,
        {
          params: {
            dataAccomodation,
            id,
          },
        },
      );
      if (res.data.success) {
        dispatch(selectProgressBarState(false));
        alert.success(res.data.message);
        onClose();
      } else {
        dispatch(selectProgressBarState(false));
        alert.error('Something Went Wrong');
        onClose();
      }
    } catch (err) {
      dispatch(selectProgressBarState(false));
      alert.error('Something Went Wrong');
      onClose();
    }
  };
};

export const getAccomodations = () => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get(
      '/api/v1/accomodation/get-accomodations',
    );
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
export const getAllSingleUserAccomodations = () => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get(
      '/api/v1/accomodation/get-all-single-user-accomodations',
    );
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ALL_SINGLE_USER_ACCOMODATIONS,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ALL_SINGLE_USER_ACCOMODATIONS,
        payload: [],
      });
    }
  };
};
export const getAllSingleUserAccomodationsById = (id) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get(
      '/api/v1/accomodation/get-all-single-user-accomodations-by-id',
      {
        params: {
          id: id,
        },
      },
    );
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ALL_SINGLE_USER_ACCOMODATIONS_BY_ID,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ALL_SINGLE_USER_ACCOMODATIONS_BY_ID,
        payload: [],
      });
    }
  };
};
export const getAccomodation = (id) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get(
      '/api/v1/accomodation/get-single-accomodation',
      {
        params: {
          id,
        },
      },
    );
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ACCOMODATION,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ACCOMODATION,
        payload: [],
      });
    }
  };
};
