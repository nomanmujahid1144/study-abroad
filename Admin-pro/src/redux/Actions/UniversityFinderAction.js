import { axiosInstance } from '../../constants/axiosInstance';
import { selectProgressBarState } from './ProgressBarActions';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';

export const updateUniversityFounder = (
  dataUniversityFinder,
  formData,
  id,
  alert,
  onClose,
) => {
  return async (dispatch) => {
    try {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.patch(
        '/api/v1/universityFinder/update-university-finder',
        formData,
        {
          params: {
            dataUniversityFinder,
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

export const getUniversityFinders = () => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get(
      '/api/v1/universityFinder/get-university-finder',
    );
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
export const getAllSingleUserUniversityFinders = () => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get(
      '/api/v1/universityFinder/get-all-single-user-university-finder',
    );
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ALL_SINGLE_USER_UNIVERSITY_FINDERS,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ALL_SINGLE_USER_UNIVERSITY_FINDERS,
        payload: [],
      });
    }
  };
};
export const getAllSingleUserUniversityFindersById = (id) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get(
      '/api/v1/universityFinder/get-all-single-user-university-finder-by-id',
      {
        params: {
          id: id,
        },
      },
    );
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ALL_SINGLE_USER_UNIVERSITY_FINDERS_BY_ID,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ALL_SINGLE_USER_UNIVERSITY_FINDERS_BY_ID,
        payload: [],
      });
    }
  };
};

export const getUniversityFinder = (id) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get(
      '/api/v1/universityFinder/get-single-university-finder',
      {
        params: {
          id,
        },
      },
    );
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_UNIVERSITY_FINDER,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_UNIVERSITY_FINDER,
        payload: {},
      });
    }
  };
};
