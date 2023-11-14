import { axiosInstance } from '../../constants/axiosInstance';
import { selectProgressBarState } from './ProgressBarActions';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { handleApiError } from '../../constants/helperFunction';

export const getDashboardData = () => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get('/api/v1/admin/getdashboarddata');
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_DASHBOARD_DATA,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_DASHBOARD_DATA,
        payload: [],
      });
    }
  };
};
