import { axiosInstance } from '../../constants/axiosInstance';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { selectProgressBarState } from './ProgressBarActions';

export const addDomain = (domainData, navigate, alert, onModelClose) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.post(
      '/api/v1/domain/adddomain',
      domainData,
    );
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      alert.show('Domain added successfully', {
        onClose: () => {
          navigate('/admin/main/domain/new-domain');
        },
      });
      onModelClose();
      dispatch(getAllDomains());
      dispatch({
        type: ACTION_TYPES.SET_DOMAIN,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      alert.show('Error while adding Blog');
    }
  };
};

export const updateDomain = (id, formData, alert, onClose) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.post(
      '/api/v1/domain/updatedomain',
      formData,
      {
        params: {
          id: id,
        },
      },
    );
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      alert.show('Domain updated successfully');
      onClose();
      dispatch(getAllDomains());
      dispatch({
        type: ACTION_TYPES.UPDATE_DOMAIN,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      alert.show('error while updating Domain');
    }
  };
};

export const getAllDomains = () => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get('/api/v1/domain/getdomains');
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_DOMAINS,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      alert.show('No Domain Found');
      dispatch({
        type: ACTION_TYPES.GET_DOMAINS,
        payload: [],
      });
    }
  };
};

export const deleteDomain = (id, alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.delete('/api/v1/domain/deletedomain', {
      params: {
        id: id,
      },
    });
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      alert.show('successfully Deleted Domain');
      dispatch(getAllDomains());
    } else {
      dispatch(selectProgressBarState(false));
      alert.show('Error in deletion');
    }
  };
};

export const getDomainById = (id) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get('/api/v1/domain/getdomainbyid', {
      params: {
        id: id,
      },
    });
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_SINGLE_DOMAIN,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      alert.show('No Blog Found');
      dispatch({
        type: ACTION_TYPES.GET_SINGLE_DOMAIN,
        payload: [],
      });
    }
  };
};
