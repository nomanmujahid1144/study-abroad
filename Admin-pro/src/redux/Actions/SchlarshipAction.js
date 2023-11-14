import { axiosInstance } from '../../constants/axiosInstance';
import { selectProgressBarState } from './ProgressBarActions';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { handleApiError } from '../../constants/helperFunction';

export const updateScholarship = (
  dataScholarship,
  formData,
  id,
  alert,
  onClose,
) => {
  return async (dispatch) => {
    try {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.patch(
        '/api/v1/scholarship/update-scholarship',
        formData,
        {
          params: {
            dataScholarship,
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

export const getScholarships = () => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get('/api/v1/scholarship/get-scholarships');
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
export const getAllSingleUserScholarships = () => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get(
      '/api/v1/scholarship/get-all-single-user-scholarships',
    );
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ALL_SINGLE_USER_SCHOLARSHIPS,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ALL_SINGLE_USER_SCHOLARSHIPS,
        payload: [],
      });
    }
  };
};
export const getAllSingleUserScholarshipsById = (id) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get(
      '/api/v1/scholarship/get-all-single-user-scholarships-by-id',
      {
        params: {
          id: id,
        },
      },
    );
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ALL_SINGLE_USER_SCHOLARSHIPS_BY_ID,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ALL_SINGLE_USER_SCHOLARSHIPS_BY_ID,
        payload: [],
      });
    }
  };
};

export const getScholarship = (id) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get(
      '/api/v1/scholarship/get-single-scholarship',
      {
        params: {
          id,
        },
      },
    );
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_SCHOLARSHIP,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_SCHOLARSHIP,
        payload: [],
      });
    }
  };
};
